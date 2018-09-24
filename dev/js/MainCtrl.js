angular.module('MainCtrl', [])
.controller('MainCtrl', ['$scope', '$rootScope', '$timeout', '$translate', '$mdDialog', '$localStorage', '$window', 
	function ($scope, $rootScope, $timeout, $translate, $mdDialog, $localStorage, $window) {
		
		Rs = $scope;
		var Ctrl = {};
		var t = $translate.instant;

		Rs.Inputs = {
			currencySymbol: '$',
			startingEq: 100,
			winProb: 50,
			winRatio: 2,
			trades: 100,
			runs: 10,
			risk: 1,
			riskType: 'Percent',
			scale: 'Normal',
			calculating: false,
			calcDone: false
		};

		Ctrl.Control = {};

		Ctrl.gamble = () => {
			var randomNum = Math.floor(Math.random()*100);
			return (randomNum < Rs.Inputs.winProb);
		};

		Ctrl.getRiskedVal = (eq) => {
			if(eq <= 0) return 0;
			var riskedVal = (Rs.Inputs.riskType == 'Percent') ? (eq * Rs.Inputs.risk / 100) : Math.min(Rs.Inputs.risk, eq);
			return riskedVal = Math.min(riskedVal, eq);

		};

		Ctrl.calcEq = (eq, risked, win) => {
			if(eq <= 0) return 0;
			var winnings = risked * Rs.Inputs.winRatio;
			var newEq = ( win ? (eq + winnings) : (eq - risked) );
			newEq = Math.max(newEq, 0);

			//console.log(eq, win, risked, winnings, newEq);

			return Ctrl.actRun.eq = newEq;
		};


		Ctrl.trade = () => {
			if(Ctrl.Control.currentTrade == 1){
				Ctrl.actRun = {
					run: Ctrl.Control.currentRun,
					eq: angular.copy(Rs.Inputs.startingEq),
					maxEq:    0,
					maxDD: 	  0,
					maxDDAbs: 0,
					trades: []
				};

				Ctrl.Control.CW = 0;
				Ctrl.Control.CL = 0;
			};


			var win = Ctrl.gamble();
			var risked = Ctrl.getRiskedVal(Ctrl.actRun.eq);

			var trade = {
				run: Ctrl.Control.currentRun,
				trade: Ctrl.Control.currentTrade,
				tradeGlob: Ctrl.Control.currentTradeGlob, 
				risked: risked,
				win: win,
				eq: Ctrl.calcEq(Ctrl.actRun.eq, risked, win),
				cw: Ctrl.Control.CW,
				cl: Ctrl.Control.CL,
			};

			//DD
			Ctrl.actRun.maxEq = Math.max(Ctrl.actRun.maxEq, trade.eq);
			trade.dd = (Ctrl.actRun.maxEq - trade.eq) / Ctrl.actRun.maxEq;

			if(trade.dd > Ctrl.actRun.maxDD){
				Ctrl.actRun.maxDD    = trade.dd;
				Ctrl.actRun.maxDDAbs = trade.dd * Ctrl.actRun.maxEq;
			};

			//console.log(trade);
			Ctrl.actRun.trades.push(trade);
			Ctrl.Control.currentTradeGlob++;


			//Consecutive Win Loses (Global)
			if(win){
				Ctrl.Control.CW++; Ctrl.Control.CL = 0;
			}else{
				Ctrl.Control.CL++; Ctrl.Control.CW = 0;
			};

			if(Ctrl.Control.currentTrade >= Rs.Inputs.trades){
				Ctrl.Results.push(Ctrl.actRun);
				Ctrl.Control.currentTrade = 1;
				Ctrl.Control.currentRun++;
			}else{
				Ctrl.Control.currentTrade++;
			};

			if(Ctrl.Control.currentTradeGlob <= Ctrl.Control.totalTrades){
				//Rs.progress = Math.ceil(Ctrl.Control.currentTradeGlob / Ctrl.Control.totalTrades * 100);
				//console.log(Ctrl.Control.progress);
			}else{
				//Finish
				console.log('Termine');
				Ctrl.finishCalc();
			};
		};

		Rs.run = () => {
			if(Rs.Inputs.calculating) return;

			Rs.reset();

			Rs.Inputs.calculating = true;
			Rs.Inputs.calcDone = false;

			Rs.chartData = [];

			console.log('Starting');

			$timeout(() => {
				for(var i = 1; i <= Ctrl.Control.totalTrades; i++){
					Ctrl.trade();
				};
			}, 1500);
		};

		Rs.reset = () => {
			Ctrl.Results = [];
			Ctrl.Control = {};

			Ctrl.Control.currentRun = 1;
			Ctrl.Control.currentTrade = 1;
			Ctrl.Control.currentTradeGlob = 1;
			Ctrl.Control.totalTrades = Rs.Inputs.runs * Rs.Inputs.trades;
			Ctrl.Control.CW = 0;
			Ctrl.Control.CL = 0;
			Ctrl.Control.chartFixed = false;
		};

		Ctrl.finishCalc = () => {
			var Data = [];
			Ctrl.TData = [];

			Ctrl.Results.forEach((Run) => {
				var Serie = {
					key: 'Run #' + Run.run,
					strokeWidth: 0.5,
					values: [{ x: 0, y: Rs.Inputs.startingEq }]
				};

				Run.trades.forEach((Trade) => {
					Serie.values.push({ x: Trade.trade, y: Trade.eq });

					if(Run.run == 1){
						Ctrl.TData.push({
							sum: 0,
							min: Trade.eq,
							max: Trade.eq,
						});
					};

					TD = Ctrl.TData[(Trade.trade - 1)];

					TD.sum += Trade.eq;
					TD.min = Math.min(TD.min, Trade.eq);
					TD.max = Math.max(TD.max, Trade.eq);

					//Vars
					if(Trade.tradeGlob == 1){
						Ctrl.Control.minEq 		= Trade.eq;
						Ctrl.Control.maxEq 		= Trade.eq;
						Ctrl.Control.maxCW 		= 0;
						Ctrl.Control.maxCL 		= 0;
					}else{
						Ctrl.Control.minEq = Math.min(Ctrl.Control.minEq, Trade.eq);
						Ctrl.Control.maxEq = Math.max(Ctrl.Control.maxEq, Trade.eq);
						Ctrl.Control.maxCW = Math.max(Ctrl.Control.maxCW, Trade.cw);
						Ctrl.Control.maxCL = Math.max(Ctrl.Control.maxCL, Trade.cl);
					};

					
				});

				Data.push(Serie);
			});


			var TAvgs = [{ x: 0, y: Rs.Inputs.startingEq, size: 5 }];
			var TIniEq = [];
			Ctrl.Control.maxTAvg = 0;
			Ctrl.TData.forEach((TD, i) => {
				TD.avg = (TD.sum / Rs.Inputs.runs);
				TAvgs.push({ x: (i+1), y: TD.avg, size: 70 });
				TIniEq.push({ x: (i+1), y: Rs.Inputs.startingEq });
				Ctrl.Control.lastTAvg = TD.avg;
				Ctrl.Control.maxTAvg  = Math.max(Ctrl.Control.maxTAvg, TD.avg);
			});

			Data.push({
				key: 'Average',
				strokeWidth: 3,
				color: 'black',
				values: TAvgs
			});

			/*Data.push({
				key: 'Initial',
				strokeWidth: 1,
				color: '#ccc',
				classed: 'dashed',
				values: TIniEq
			});*/

			//console.log(Ctrl.TData);
			Ctrl.calcVars();

			//Ajustar eje Y
			
			var maxEqLen = Math.ceil(Ctrl.Control.maxEq).toString().length;
			maxEqLen = Math.max(maxEqLen, 2);
			Rs.chartOps.chart.margin.left = (maxEqLen * 10) + 20;
			Rs.chartOps.chart.yAxis.axisLabelDistance = (maxEqLen * 10) - 50;

			//console.log(Math.ceil(Ctrl.Control.maxEq).toString());


			Rs.chartData = Data;
			
			Rs.Inputs.calculating = false;
			Rs.Inputs.calcDone = true;

			/*$timeout(() => {
				window.dispatchEvent(new Event('resize'));
			}, 600);*/
			
			//Rs.chartApi.update();

			//delete Ctrl.Results;
			//delete Data;

		};

		Ctrl.calcVars = () => {
			Rs.Vars = v = {};
			i = Rs.Inputs;
			c = Ctrl.Control;

			v.Accuracy = (i.winProb / 100);
			v.PayOff = i.winRatio;

			v.Kelly 		= d3.format(',.2f')(v.Accuracy - ((1-v.Accuracy) / v.PayOff ));
			v.Expectation 	= d3.format(',.2f')((v.Accuracy * v.PayOff) - (1 - v.Accuracy));
			v.minEq 		= d3.format(',.2f')(c.minEq);
			v.maxEq 		= d3.format(',.2f')(c.maxEq);
			v.maxCW			= d3.format(',.0f')(c.maxCW);
			v.maxCL			= d3.format(',.0f')(c.maxCL);

			//DD
			v.avgMaxDD = 0;
			v.maxDD = 0;
			v.maxDDAbs = 0;
			Ctrl.Results.forEach((Run) => {
				v.avgMaxDD += Run.maxDD;

				v.maxDD    = Math.max(v.maxDD, 		Run.maxDD);
				v.maxDDAbs = Math.max(v.maxDDAbs, 	Run.maxDDAbs);
			});
			v.maxDD 	= d3.format(',.2%')(v.maxDD);
			v.maxDDAbs 	= d3.format(',.2f')(v.maxDDAbs);
			v.avgMaxDDRaw = v.avgMaxDD / i.runs;
			v.avgMaxDD 	= d3.format(',.2%')(v.avgMaxDDRaw);

			//Perf
			v.avgPerfAbs = d3.format(',.2f')(c.lastTAvg - i.startingEq);
			v.avgPerf 	 = d3.format(',.2%')((c.lastTAvg - i.startingEq) / i.startingEq);

			v.retMaxDD	 = d3.format(',.2%')((c.lastTAvg - (c.maxTAvg - v.avgMaxDDRaw)) / (c.maxTAvg - v.avgMaxDDRaw));

			console.log(v);
			Rs.Vars = v;
		};

		Rs.chartOps = {
            chart: {
                type: 'lineChart',
                height: 500,
                margin : {
                    top: 10,
                    right: 20,
                    bottom: 40,
                    left: 50
                },
                pointSize: (d) => {
                	return d.size || 4;
                },
                pointShape: (d) => {
                	return d.shape || 'circle';
                },
                x: function(d){ return d.x; },
                y: function(d){ if(d) return d.y; },
                noData: 'No Data',
                useInteractiveGuideline: true,
                showLegend: false,
                xAxis: {
                    axisLabel: ''
                },
                yAxis: {
                    axisLabel: '',
                    tickFormat: function(d){
                        return d3.format(',.0f')(d);
                    },
                    axisLabelDistance: -20
                },
                color: ['#88A80B','#BCDA45','#A7CB1B','#6F8B00','#526700','#579E0A','#8ACD41','#70BF19','#448300','#326100','#AFAA0B','#E3DE48','#D4CE1C','#918C00','#6B6800'],
                interpolate: 'monotone',
                interactiveLayer: {
                	showGuideLine: true,
                	tooltip: {
                		contentGenerator: (d) => {
                			if (d === null || d.value == 0) { return ''; }

                			//console.log(d,a);
                			TD = Ctrl.TData[(d.value - 1)];

                			var table = "<table><thead><tr><td class=x-value colspan=2><span class='tooltip text-bold text-green'>" +t('TRADE')+ " #" + d.value + "</span></td></tr></thead><tbody>";

                			table += "<tr><td class=key>" +t('AVG')+ ":</td><td class=value>" + d3.format(',.2f')(TD.avg) + "<td><tr>";
                			table += "<tr><td class=key>" +t('MAX')+ ":</td><td class=value>" + d3.format(',.2f')(TD.max) + "<td><tr>";
                			table += "<tr><td class=key>" +t('MIN')+ ":</td><td class=value>" + d3.format(',.2f')(TD.min) + "<td><tr>";

                			table += "</tbody></table>";

                			return table;

                			
	                	}
                	}
                },
                dispatch: {
					renderEnd: function(e){ Ctrl.fixChart(); }
				}
                //forceY: [0,100],
            },
        };

        Ctrl.fixChart = () => {
        	if(Ctrl.Control.chartFixed) return;

        	window.dispatchEvent(new Event('resize'));
        	Ctrl.Control.chartFixed = true;
        };

        var wih = (window.innerHeight - 110);
        wih = Math.min(wih, 500);
        Rs.chartOps.chart.height = wih;
        

        Rs.chartConfig = {
        	//refreshDataOnly: true,
        	deepWatchData: false,
        	deepWatchDataDepth: 0
        };


		

		Rs.CSVHeaders = [ 'Run', 'Trade', 'Win', 'Equity' ];
		Rs.getCSV = () => {
			var CSV = [];

			Ctrl.Results.forEach((Run) => {
				Run.trades.forEach((Trade) => {
					CSV.push([ Run.run, Trade.trade, Trade.win, d3.format('.2f')(Trade.eq) ]);
				});

			});

			return CSV;
		};


		//Indicators Help
		Rs.IndHelp = (ev, k) => {
			$mdDialog.show(
				$mdDialog.alert()
					.clickOutsideToClose(true).targetEvent(ev).fullscreen(false)
					.title(t(k))
					.textContent(t('H_'+k))
					.ok(t('GOT_IT'))
			);
		};



		//Cambio de Lenguaje
		Rs.Languages = [
			{ id: 'en', name: 'English' },
			{ id: 'es', name: 'Español' },
		];

		var navLan = $window.navigator.language || $window.navigator.userLanguage;
		if(navLan){
			navLan = navLan.substring(0,2);
			if( (['en','es']).indexOf(navLan) == -1 ) navLan = 'en';
		}else{
			navLan = 'en';
		};

		Rs.Storage = $localStorage.$default({
			Lang: navLan
		});

		Rs.changeLang = () => {
			$translate.use(Rs.Storage.Lang);
			Rs.chartOps.chart.xAxis.axisLabel = t('TRADE') + ' #';
			Rs.chartOps.chart.yAxis.axisLabel = t('EQ') + ' (' + Rs.Inputs.currencySymbol + ')';
		};
		Rs.changeLang();
		
		//Rs.run();
	}
]);