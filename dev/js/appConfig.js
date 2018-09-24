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
				"RISK_PER_TRADE": 			"Risk per Trade",
				"WIN_PROB": 				"Win Probability",
				"WIN_LOSS_REL": 			"Win:Loss Relation",
				"TRADES_PER_RUN": 			"Trades per Run",
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
				"KELLY": 					"Kelly",
				"EXPECTATION": 				"Expectation",
				"MAX_DRAWDOWN": 			"Max. Drawdown",
				"AVG_MAX_DRAWDOWN": 		"Avg. Max Drawdown",
				"MIN_EQ": 					"Min. Equity",
				"MAX_EQ": 					"Max. Equity",
				"MAX_CONSEC_WINS": 			"Max. Consecutive Wins",
				"MAX_CONSEC_LOSES": 		"Max. Consecutive Loses",
				"AVG_PERFORMANCE": 			"Avg. Performance",
				"RETURN_MAX_DRAWDOWN": 		"Return on Max Drawdown",
				"DOWNLOAD_DATA": 			"Download Data",

				"GOT_IT": 					"Got It",
				"H_KELLY": 					"Kelly bet is a formula used to determine the optimal size of a series of bets in order to maximize the logarithm of wealth, the right approach would be to bet the percentage Kelly determines of the pot on each throw. if losing, the size of the bet gets cut; if winning, the stake increases",
				"H_EXPECTATION": 			"The expected value is the sum of: [(each of the possible outcomes) × (the probability of the outcome occurring)]. In more concrete terms, the expectation is what you would expect the outcome of an experiment to be on average",
				"H_MAX_DRAWDOWN": 			"Maximum Drawdown (MDD) is an indicator of downside risk over a specified time period. MDD = (Trough Value – Peak Value) ÷ Peak Value",
				"H_RETURN_MAX_DRAWDOWN": 	"Return over maximum drawdown (RoMaD) is a risk-adjusted return metric. RoMaD = Portfolio Return / Max. Drawdown",
				"H_AVG_MAX_DRAWDOWN": 		"The metric will calculate the maximum drawdown of each possible scenario (each line), then he will sum these values. Then the calculated sum is divided by the counter value",
				"H_MIN_EQ": 				"Is the lowest equity value obtained in all the possible scenarios",
				"H_MAX_EQ": 				"Is the highest equity value obtained in all the possible scenarios",
				"H_AVG_PERFORMANCE": 		"Measures the average of the returns on the investments done over a specific period. It can be positive, representing a gain in value, or negative, representing a loss",
				"H_MAX_CONSEC_WINS": 		"Is the maximum number of consecutive wins on the trades",
				"H_MAX_CONSEC_LOSES": 		"Is the maximum number of consecutive losses on the trades",
				
			},
			"es" : {
				"APP_NAME": 				"Simulador de Curva de Capital",
				"PARAMETERS": 				"Parámetros",
				"STARTING_EQ": 				"Capital Inicial",
				"RISK_PER_TRADE": 			"Riesgo por Transacción",
				"WIN_PROB": 				"Probabilidad de Ganar",
				"WIN_LOSS_REL": 			"Relación Ganancia:Pérdida",
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
				"KELLY": 					"Criterio Kelly",
				"EXPECTATION": 				"Expectativa",
				"MAX_DRAWDOWN": 			"Reducción Máx.",
				"AVG_MAX_DRAWDOWN": 		"Reducción Máx. Prom.",
				"MIN_EQ": 					"Capital Min.",
				"MAX_EQ": 					"Capital Max.",
				"MAX_CONSEC_WINS": 			"Ganancias Consecutivas Máx.",
				"MAX_CONSEC_LOSES": 		"Perdidas Consecutivas Máx.",
				"AVG_PERFORMANCE": 			"Desempeño Prom.",
				"RETURN_MAX_DRAWDOWN": 		"Retorno en Reducción Máx.",
				"DOWNLOAD_DATA": 			"Descargar Datos",

				"GOT_IT": 					"Entendido",
				"H_KELLY": 					"El criterio Kelly es una fórmula utilizada para determinar el tamaño óptimo de una serie de apuestas para maximizar el logaritmo de la ganancia, el enfoque correcto sería apostar el porcentaje que Kelly determine del bote en cada lanzamiento. si pierde, el tamaño de la apuesta se corta; si gana, la apuesta aumenta",
				"H_EXPECTATION": 			"El valor esperado es la suma de: [(cada uno de los posibles resultados) × (la probabilidad de que se produzca el resultado)]. En términos más concretos, la expectativa es lo que esperarías que el resultado de un experimento fuera en promedio",
				"H_MAX_DRAWDOWN": 			"La Reducción Máxima (MDD) es un indicador de riesgo a la baja durante un período de tiempo específico. MDD = (Valor mínimo - Valor máximo) ÷ Valor máximo",
				"H_RETURN_MAX_DRAWDOWN": 	"El retorno sobre la reducción máxima (RoMaD) es una métrica de retorno ajustada al riesgo. RoMaD = Retorno de portafolio / Máx. Reducción",
				"H_AVG_MAX_DRAWDOWN": 		"La métrica calculará la reducción máxima de cada posible escenario (cada línea), luego sumará estos valores. Entonces, la suma calculada se divide por el valor del contador",
				"H_MIN_EQ": 				"Es el capital más bajo obtenido en todos los escenarios posibles",
				"H_MAX_EQ": 				"Es el capital más alto obtenido en todos los escenarios posibles",
				"H_AVG_PERFORMANCE": 		"Mide el promedio de los rendimientos de las inversiones realizadas durante un período específico. Puede ser positivo, representando una ganancia en valor, o negativo, representando una pérdida",
				"H_MAX_CONSEC_WINS": 		"Es la cantidad máxima de victorias consecutivas en las transacciones",
				"H_MAX_CONSEC_LOSES": 		"Es la cantidad máxima de pérdidas consecutivas en las transacciones",
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
