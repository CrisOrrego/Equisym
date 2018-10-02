app = angular.module('Equisym', 
[
	'ngMaterial', 
	'ngMessages',
	'ngSanitize',
	'ngCsv',
	'nvd3',
	'pascalprecht.translate',
	'ngStorage',

	'appConfig',

	'MainCtrl'
]);

//@koala-append "appConfig.js";
//@koala-append "MainCtrl.js";

angular.module('appConfig', [])
.config(['$mdThemingProvider', '$mdIconProvider', '$mdThemingProvider', '$translateProvider', 
	function($mdThemingProvider, $mdIconProvider, $mdThemingProvider, $translateProvider){

		var icons = {
			'md-plus' 			: '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
			'md-close' 			: '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>',
			'md-arrow-back' 	: '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>',
			'md-apps' 			: '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g transform="translate(3, 3)"><circle cx="2" cy="2" r="2"></circle><circle cx="2" cy="9" r="2"></circle><circle cx="2" cy="16" r="2"></circle><circle cx="9" cy="2" r="2"></circle><circle cx="9" cy="9" r="2"></circle><circle cx="16" cy="2" r="2"></circle><circle cx="16" cy="9" r="2"></circle><circle cx="16" cy="16" r="2"></circle><circle cx="9" cy="16" r="2"></circle></g></svg>',
			'md-enter' 			: '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z"/></svg>',
			'md-save' 			: '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg>',
			'md-delete' 		: '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
			'md-bars' 			: '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>',
			'md-more-v' 		: '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>',
			'md-search'			: '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
			'md-chevron-down' 	: '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
			'md-check'			: '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>',
			'md-edit'			: '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
			'md-settings'		: '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"/><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>',
		};

		iconp = $mdIconProvider.defaultFontSet( 'fas' );

		angular.forEach(icons, function(icon, k) {
			iconp.icon(k, 'data:image/svg+xml, '+icon, 24);
		});

		$mdThemingProvider.definePalette('DorrAssetPallete', {
		  '50': 'f4f5ec',
		  '100': 'e4e7d1',
		  '200': 'd2d7b2',
		  '300': 'c0c793',
		  '400': 'b3bb7b',
		  '500': 'a5af64',
		  '600': '9da85c',
		  '700': '939f52',
		  '800': '8a9648',
		  '900': '798636',
		  'A100': 'f8ffd4',
		  'A200': 'efffa1',
		  'A400': 'e6ff6e',
		  'A700': 'e1ff54',
		  'contrastDefaultColor': 'light',
		  'contrastDarkColors': [
		    '50',
		    '100',
		    '200',
		    '300',
		    '400',
		    '500',
		    '600',
		    '700',
		    '800',
		    'A100',
		    'A200',
		    'A400',
		    'A700'
		  ],
		  'contrastLightColors': [
		    '900'
		  ]
		});

		$mdThemingProvider.theme('default')
			.primaryPalette('DorrAssetPallete');
			


		//Translation
		var translations = {
			"en" : {
				"APP_NAME": 				"Equity Curve Simulator",
				"PARAMETERS": 				"Parameters",
				"STARTING_EQ": 				"Starting Equity",
				"RISK_PER_TRADE": 			"Risk Per Trade",
				"WIN_PROB": 				"Win Probability",
				"WIN_LOSS_REL": 			"Win:Loss Ratio",
				"TRADES_PER_RUN": 			"Trades Per Run",
				"RUNS_LINES":       		"Scenarios (Lines)", 
				"GRAPH_SCALE":      		"Graph Scale", 
				"RUN_SIMULATION": 			"Run Simulation", 

				"GRAPH": 					"Graph",
				"TRADE": 					"Trade",
				"EQ": 						"Equity",
				"MAX": 						"Maximum",
				"MIN": 						"Minimum",
				"AVG": 						"Average",

				"RESULTS": 					"Results",
				"AVG_PERFORMANCE": 			"Avg. Performance",
				"MAX_DRAWDOWN": 			"Max. Drawdown",
				"AVG_MAX_DRAWDOWN": 		"Avg. Max. Drawdown",
				"RETURN_MAX_DRAWDOWN": 		"Return Over Max Drawdown",
				"MAX_EQ": 					"Max. Equity",
				"MIN_EQ": 					"Min. Equity",
				"MAX_CONSEC_WINS": 			"Max. Consecutive Wins",
				"MAX_CONSEC_LOSES": 		"Max. Consecutive Losses",
				"EXPECTATION": 				"Expectation",
				"KELLY": 					"Kelly Criterion",
				"DOWNLOAD_DATA": 			"Download Data",

				"GOT_IT": 					"Got It",
				"H_AVG_PERFORMANCE": 		"Measures the average of the returns on the investments done over a specific period. It can be positive, representing a gain in value, or negative, representing a loss",
				"H_MAX_DRAWDOWN": 			"Maximum Drawdown (MDD) is an indicator of downside risk over a specified time period. MDD = (Trough Value – Peak Value) ÷ Peak Value",
				"H_AVG_MAX_DRAWDOWN": 		"The maximum drawdown value of each possible scenario (each line) is summed and then divided by the number of scenarios",
				"H_RETURN_MAX_DRAWDOWN": 	"Return over maximum drawdown (RoMaD) is a risk-adjusted return metric. RoMaD = Portfolio Return / Max. Drawdown",
				"H_MAX_EQ": 				"Is the highest equity value obtained in all the possible scenarios",
				"H_MIN_EQ": 				"Is the lowest equity value obtained in all the possible scenarios",
				"H_MAX_CONSEC_WINS": 		"Is the maximum number of consecutive wins on the trades",
				"H_MAX_CONSEC_LOSES": 		"Is the maximum number of consecutive losses on the trades",
				"H_EXPECTATION": 			"The mathematical expectation of any bet is defined as follows: the sum of all possible gains and losses multiplied by their relative probabilities. Written as a formula: e= (w × p) + (-v × 1). e = mathematical expectation, w = gain on the winning bet, p = probability of the win, v = value of the loss, l = probability of the loss",
				"H_KELLY": 					"In probability theory and intertemporal portfolio choice, the Kelly criterion, Kelly strategy, Kelly formula, or Kelly bet is a formula used to determine the optimal size of a series of bets in order to maximize the logarithm of wealth",
				
			},
			"es" : {
				"APP_NAME": 				"Simulador de Curva de Capital",
				"PARAMETERS": 				"Parámetros",
				"STARTING_EQ": 				"Capital Inicial",
				"RISK_PER_TRADE": 			"Riesgo por Transacción",
				"WIN_PROB": 				"Probabilidad de Ganar",
				"WIN_LOSS_REL": 			"Ratio entre Ganancia:Pérdida",
				"TRADES_PER_RUN": 			"Transacciones por Escenario",
				"RUNS_LINES":       		"Escenarios (Lineas)", 
				"GRAPH_SCALE":      		"Escala de la Gráfica", 
				"RUN_SIMULATION": 			"Correr Simulación", 

				"GRAPH": 					"Gráfica",
				"TRADE": 					"Transacción", 
				"EQ": 						"Capital", 
				"MAX": 						"Máximo",
				"MIN": 						"Mínimo",
				"AVG": 						"Promedio",

				"RESULTS": 					"Resultados",
				"AVG_PERFORMANCE": 			"Desempeño Prom.",
				"MAX_DRAWDOWN": 			"Reducción Máx.",
				"AVG_MAX_DRAWDOWN": 		"Reducción Máx. Prom.",
				"RETURN_MAX_DRAWDOWN": 		"Retorno en Reducción Máx.",
				"MAX_EQ": 					"Capital Max.",
				"MIN_EQ": 					"Capital Min.",
				"MAX_CONSEC_WINS": 			"Ganancias Consecutivas Máx.",
				"MAX_CONSEC_LOSES": 		"Perdidas Consecutivas Máx.",
				"EXPECTATION": 				"Expectativa",
				"KELLY": 					"Criterio Kelly",
				"DOWNLOAD_DATA": 			"Descargar Datos",

				"GOT_IT": 					"Entendido",
				"H_AVG_PERFORMANCE": 		"Mide el promedio de los rendimientos de las inversiones realizadas durante un período específico. Puede ser positivo, representando una ganancia en valor, o negativo, representando una pérdida",
				"H_MAX_DRAWDOWN": 			"La Reducción Máxima (MDD) es un indicador de riesgo a la baja durante un período de tiempo específico. MDD = (Valor mínimo - Valor máximo) ÷ Valor máximo",
				"H_AVG_MAX_DRAWDOWN": 		"El valor máximo de reducción de cada escenario posible (cada línea) se suma y luego se divide por el número de escenarios",
				"H_RETURN_MAX_DRAWDOWN": 	"El retorno sobre la reducción máxima (RoMaD) es una métrica de retorno ajustada al riesgo. RoMaD = Retorno de portafolio / Máx. Reducción",
				"H_MAX_EQ": 				"Es el capital más alto obtenido en todos los escenarios posibles",
				"H_MIN_EQ": 				"Es el capital más bajo obtenido en todos los escenarios posibles",
				"H_MAX_CONSEC_WINS": 		"Es la cantidad máxima de victorias consecutivas en las transacciones",
				"H_MAX_CONSEC_LOSES": 		"Es la cantidad máxima de pérdidas consecutivas en las transacciones",
				"H_EXPECTATION": 			"La expectativa matemática de cualquier apuesta se define de la siguiente manera: la suma de todas las ganancias y pérdidas posibles multiplicadas por sus probabilidades relativas. Escrito como una fórmula: e = (w × p) + (-v × 1). e = expectativa matemática, w = ganancia en la apuesta ganadora, p = probabilidad de la ganancia, v = valor de la pérdida, l = probabilidad de la pérdida",
				"H_KELLY": 					"En la teoría de la probabilidad y la selección de cartera intertemporal, el criterio de Kelly, la estrategia de Kelly, la fórmula Kelly o la apuesta Kelly es una fórmula utilizada para determinar el tamaño óptimo de una serie de apuestas con el fin de maximizar el logaritmo de la ganancia",
			},

		};
		
		//translations = $sce.trustAsHtml(translations);

		$translateProvider
			.useSanitizeValueStrategy('escape')
			.translations('en', translations.en)
			.translations('es', translations.es)
			.preferredLanguage('en');



  }
]);


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
		
		Rs.run();
	}
]);