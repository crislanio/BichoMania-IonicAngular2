angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider



        .state('tabsController.registreSeusPalpites', {
        url: '/meuspalpites',
        views: {
            'tab2': {
                templateUrl: 'templates/registreSeusPalpites.html',
                controller: 'registreSeusPalpitesCtrl'
            }
        }
    })

    .state('tabsController', {
        url: '/page1',
        templateUrl: 'templates/tabsController.html',
        abstract: true
    })

    .state('tabsController.mTodosDeJogos', {
        url: '/metodosdejogos1',
        views: {
            'tab3': {
                templateUrl: 'templates/mTodosDeJogos.html',
                controller: 'mTodosDeJogosCtrl'
            }
        }
    })

    .state('tabsController.mTodosDeJogos2', {
        url: '/metodosdejogos2',
        views: {
            'tab3': {
                templateUrl: 'templates/mTodosDeJogos2.html',
                controller: 'mTodosDeJogos2Ctrl'
            }
        }
    })

    .state('tabsController.palpiteDoDia', {
        url: '/palpitedodia',
        views: {
            'tab1': {
                templateUrl: 'templates/palpiteDoDia.html',
                controller: 'palpiteDoDiaCtrl'
            }
        }
    })

    .state('estudoDeCasoLotece', {
        url: '/estudodecasolotece',
        templateUrl: 'templates/estudoDeCasoLotece.html',
        controller: 'estudoDeCasoLoteceCtrl'
    })

    .state('sobre', {
        url: '/sobre',
        templateUrl: 'templates/sobre.html',
        controller: 'sobreCtrl'
    })

    .state('mTodosDeJogos3', {
        url: '/metodosdejogos3',
        templateUrl: 'templates/mTodosDeJogos3.html',
        controller: 'mTodosDeJogos3Ctrl'
    })

    // páginas dos bichos
    .state('avestruzPage', {
        url: '/avestruzPage',
        templateUrl: 'templates/avestruzPage.html',
        controller: 'avestruzPageCtrl'
    })

    .state('aguiaPage', {
            url: '/aguiaPage',
            templateUrl: 'templates/aguiaPage.html',
            controller: 'aguiaPageCtrl'
        })
        .state('burroPage', {
            url: '/burroPage',
            templateUrl: 'templates/burroPage.html',
            controller: 'burroPageCtrl'
        })
        .state('borboletaPage', {
            url: '/borboletaPage',
            templateUrl: 'templates/borboletaPage.html',
            controller: 'borboletaPageCtrl'
        })

    .state('cachorroPage', {
        url: '/cachorroPage',
        templateUrl: 'templates/cachorroPage.html',
        controller: 'cachorroPageCtrl'
    })

    .state('cabraPage', {
        url: '/cabraPage',
        templateUrl: 'templates/cabraPage.html',
        controller: 'cabraPageCtrl'
    })

    .state('carneiroPage', {
            url: '/carneiroPage',
            templateUrl: 'templates/carneiroPage.html',
            controller: 'carneiroPageCtrl'
        })
        .state('cameloPage', {
            url: '/cameloPage',
            templateUrl: 'templates/cameloPage.html',
            controller: 'cameloPageCtrl'
        })
        .state('cobraPage', {
            url: '/cobraPage',
            templateUrl: 'templates/cobraPage.html',
            controller: 'cobraPageCtrl'
        })
        .state('coelhoPage', {
            url: '/coelhoPage',
            templateUrl: 'templates/coelhoPage.html',
            controller: 'coelhoPageCtrl'
        })

    .state('cavaloPage', {
        url: '/cavaloPage',
        templateUrl: 'templates/cavaloPage.html',
        controller: 'cavaloPageCtrl'
    })

    .state('elefantePage', {
            url: '/elefantePage',
            templateUrl: 'templates/elefantePage.html',
            controller: 'elefantePageCtrl'
        })
        .state('galoPage', {
            url: '/galoPage',
            templateUrl: 'templates/galoPage.html',
            controller: 'galoPageCtrl'
        })
        .state('gatoPage', {
            url: '/gatoPage',
            templateUrl: 'templates/gatoPage.html',
            controller: 'gatoPageCtrl'
        })
        .state('jacarePage', {
            url: '/jacarePage',
            templateUrl: 'templates/jacarePage.html',
            controller: 'jacarePageCtrl'
        })
        .state('leaoPage', {
            url: '/leaoPage',
            templateUrl: 'templates/leaoPage.html',
            controller: 'leaoPageCtrl'
        })
        .state('macacoPage', {
            url: '/macacoPage',
            templateUrl: 'templates/macacoPage.html',
            controller: 'macacoPageCtrl'
        })
        .state('porcoPage', {
            url: '/porcoPage',
            templateUrl: 'templates/porcoPage.html',
            controller: 'porcoPageCtrl'
        })
        .state('pavaoPage', {
            url: '/pavaoPage',
            templateUrl: 'templates/pavaoPage.html',
            controller: 'pavaoPageCtrl'
        })
        .state('peruPage', {
            url: '/peruPage',
            templateUrl: 'templates/peruPage.html',
            controller: 'peruPageCtrl'
        })
        .state('touroPage', {
            url: '/touroPage',
            templateUrl: 'templates/touroPage.html',
            controller: 'touroPageCtrl'
        })
        .state('tigrePage', {
            url: '/tigrePage',
            templateUrl: 'templates/tigrePage.html',
            controller: 'tigrePageCtrl'
        })
        .state('ursoPage', {
            url: '/ursoPage',
            templateUrl: 'templates/ursoPage.html',
            controller: 'ursoPageCtrl'
        })
        .state('veadoPage', {
            url: '/veadoPage',
            templateUrl: 'templates/veadoPage.html',
            controller: 'veadoPageCtrl'
        })

    .state('vacaPage', {
        url: '/vacaPage',
        templateUrl: 'templates/vacaPage.html',
        controller: 'vacaPageCtrl'
    })




    .state('tabelaDoJogoDoBicho', {
        url: '/tabeladojogodobicho',
        templateUrl: 'templates/tabelaDoJogoDoBicho.html',
        controller: 'tabelaDoJogoDoBichoCtrl'
    })

    .state('estudoDeCasoLotece2', {
        url: '/estudodecasolotece2',
        templateUrl: 'templates/estudoDeCasoLotece2.html',
        controller: 'estudoDeCasoLotece2Ctrl'
    })

    .state('nMerosDaSorte', {
        url: '/numerosdasorte',
        templateUrl: 'templates/nMerosDaSorte.html',
        controller: 'nMerosDaSorteCtrl'
    })

    .state('nMerosDaSorte2', {
        url: '/numerosdasorte2',
        templateUrl: 'templates/nMerosDaSorte2.html',
        controller: 'nMerosDaSorte2Ctrl'
    })


    $urlRouterProvider.otherwise('/page1/meuspalpites')



});