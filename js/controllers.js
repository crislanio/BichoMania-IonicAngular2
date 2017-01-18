angular.module('app.controllers', [])

.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {


    }
])

.controller('registreSeusPalpitesCtrl', ['$scope', '$stateParams', '$ionicModal', 'agendaApi', '$ionicLoading', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $ionicModal, agendaApi, $ionicLoading) {
        var contatos = [];
        $scope.permitirExcluir = false;

        function obterObterContatos() {
            contatos = agendaApi.getContatos();
            $scope.contatos = contatos;

            return contatos;
        }

        $scope.salvarContato = function(contato) {
            agendaApi.addContato(contato);

            obterObterContatos();

            $scope.closeModal();
        }

        $scope.excluirContato = function(contato) {
            agendaApi.deleteContato(contato);

            obterObterContatos();
        }

        $scope.filtrarContatosFavoritos = function() {
            contatos = obterObterContatos();

            if ($scope.favorito == true) {
                contatos = contatos.filter(function(contatos) {
                    return contatos.favorito == true;
                });

                $scope.contatos = contatos;
            }
        }

        $scope.exibirAguarde = function() {
            $ionicLoading.show({ template: '<p class="item-icon-center"><ion-spinner icon="lines" class="spinner-calm"></ion-spinner></p>Aguarde, processando...' });
            setTimeout(fecharAguarde, 6000);
        }

        function fecharAguarde() {
            $ionicLoading.hide()
        }

        obterObterContatos();

        $scope.habilitarExclusao = function() {
            $scope.permitirExcluir = !$scope.permitirExcluir
        }

        $scope.abrirTelaContato = function() {
            $scope.contato = { nome: '', telefone: '', favorito: false };
            $scope.openModal();
        }

        $scope.cancelarContato = function() {
            $scope.closeModal();
        }



        ///modal inicio
        $ionicModal.fromTemplateUrl('contato.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
        });

        $scope.openModal = function() {
            $scope.modal.show();
        };

        $scope.closeModal = function() {
            $scope.modal.hide();
        };
        ///modal fim



    }
])

.controller('mTodosDeJogosCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {


    }
])

.controller('mTodosDeJogos2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {


    }
])

.controller('palpiteDoDiaCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {
        $scope.milhar = Math.floor(Math.random() * 9000 + 1000);
        $scope.centena = $scope.milhar % 1000;
        $scope.dezena = $scope.milhar % 100;
        $scope.grupo = Math.floor(Math.random() * 90 + 10);
        $scope.grupo1 = Math.floor(Math.random() * 90 + 10);
        $scope.grupo2 = Math.floor(Math.random() * 90 + 10);

        $scope.grupo11 = $scope.grupo1;
        $scope.grupo22 = $scope.grupo2;
        $scope.grupo33 = Math.floor(Math.random() * 90 + 10);

        $scope.dezena1 = Math.floor(Math.random() * 90 + 10);
        $scope.dezena2 = Math.floor(Math.random() * 90 + 10);
        $scope.gerarDuqueDezenas = function() {
            $scope.dezena1 = Math.floor(Math.random() * 90 + 10);
            $scope.dezena2 = Math.floor(Math.random() * 90 + 10);
        }

        $scope.dezena11 = $scope.dezena1;
        $scope.dezena22 = $scope.dezena2;
        $scope.dezena33 = Math.floor(Math.random() * 90 + 10);
        $scope.gerarTernoDezenas = function() {
            $scope.dezena11 = Math.floor(Math.random() * 90 + 10);
            $scope.dezena22 = Math.floor(Math.random() * 90 + 10);
            $scope.dezena33 = Math.floor(Math.random() * 90 + 10);
        }


        $scope.gerarMilhar = function() {
            $scope.milhar = Math.floor(Math.random() * 9000 + 1000);
        }
        $scope.gerarCentena = function() {
            $scope.centena = Math.floor(Math.random() * 900 + 100);
        }
        $scope.gerarDezena = function() {
            $scope.dezena = Math.floor(Math.random() * 90 + 10);
        }
        $scope.gerarGrupo = function() {
            $scope.grupo = Math.floor(Math.random() * 90 + 10);
        }
        $scope.gerarDuplaGrupo = function() {
            $scope.grupo1 = Math.floor(Math.random() * 90 + 10);
            $scope.grupo2 = Math.floor(Math.random() * 90 + 10);
        }
        $scope.gerarTernoGrupo = function() {
            $scope.grupo11 = Math.floor(Math.random() * 90 + 10);
            $scope.grupo22 = Math.floor(Math.random() * 90 + 10);
            $scope.grupo33 = Math.floor(Math.random() * 90 + 10);
        }
    }
])

.controller('estudoDeCasoLoteceCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {


    }
])

.controller('sobreCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {


    }
])

.controller('mTodosDeJogos3Ctrl', ['$scope', '$stateParams', '$ionicModal', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $ionicModal) {
        $scope.abrirModal = function() {
            $scope.openModal();
        }


        ///modal inicio
        $ionicModal.fromTemplateUrl('aguia.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
        });

        ///é o que mostra
        $ionicModal.fromTemplateUrl('avestruz.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
        });

        $scope.openModal = function() {
            $scope.modal.show();
        };

        $scope.closeModal = function() {
            $scope.modal.hide();
        };
        ///modal fim

    }
])

.controller('avestruzPageCtrl', ['$scope', '$stateParams',
    function($scope, $stateParams) {


    }
])

.controller('aguiaPageCtrl', ['$scope', '$stateParams',
        function($scope, $stateParams) {

        }
    ])
    .controller('burroPageCtrl', ['$scope', '$stateParams',
        function($scope, $stateParams) {

        }
    ])
    .controller('borboletaPageCtrl', ['$scope', '$stateParams',
        function($scope, $stateParams) {

        }
    ])
    .controller('cachorroPageCtrl', ['$scope', '$stateParams',
        function($scope, $stateParams) {

        }
    ])
    .controller('cabraPageCtrl', ['$scope', '$stateParams',
        function($scope, $stateParams) {

        }
    ])

.controller('carneiroPageCtrl', ['$scope', '$stateParams',
    function($scope, $stateParams) {

    }
])

.controller('cameloPageCtrl', ['$scope', '$stateParams',
    function($scope, $stateParams) {

    }
])

.controller('cobraPageCtrl', ['$scope', '$stateParams',
    function($scope, $stateParams) {

    }
])

.controller('coelhoPageCtrl', ['$scope', '$stateParams',
    function($scope, $stateParams) {

    }
])

.controller('cavaloPageCtrl', ['$scope', '$stateParams',
    function($scope, $stateParams) {

    }
])

.controller('elefantePageCtrl', ['$scope', '$stateParams',
    function($scope, $stateParams) {

    }
])

.controller('galoPageCtrl', ['$scope', '$stateParams',
        function($scope, $stateParams) {

        }
    ])
    .controller('gatoPageCtrl', ['$scope', '$stateParams',
        function($scope, $stateParams) {

        }
    ])
    .controller('jacarePageCtrl', ['$scope', '$stateParams',
        function($scope, $stateParams) {

        }
    ])
    .controller('leaoPageCtrl', ['$scope', '$stateParams',
        function($scope, $stateParams) {

        }
    ])
    .controller('macacoPageCtrl', ['$scope', '$stateParams',
        function($scope, $stateParams) {

        }
    ])
    .controller('porcoPageCtrl', ['$scope', '$stateParams',
        function($scope, $stateParams) {

        }
    ])
    .controller('pavaoPageCtrl', ['$scope', '$stateParams',
        function($scope, $stateParams) {

        }
    ])

.controller('peruPageCtrl', ['$scope', '$stateParams',
        function($scope, $stateParams) {

        }
    ])
    .controller('touroPageCtrl', ['$scope', '$stateParams',
        function($scope, $stateParams) {

        }
    ])
    .controller('tigrePageCtrl', ['$scope', '$stateParams',
        function($scope, $stateParams) {

        }
    ])
    .controller('ursoPageCtrl', ['$scope', '$stateParams',
        function($scope, $stateParams) {

        }
    ])
    .controller('veadoPageCtrl', ['$scope', '$stateParams',
        function($scope, $stateParams) {

        }
    ])
    .controller('vacaPageCtrl', ['$scope', '$stateParams',
        function($scope, $stateParams) {

        }
    ])
    .controller('tabelaDoJogoDoBichoCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
        // You can include any angular dependencies as parameters for this function
        // TIP: Access Route Parameters for your page via $stateParams.parameterName
        function($scope, $stateParams) {


        }
    ])

.controller('estudoDeCasoLotece2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {


    }
])

.controller('nMerosDaSorteCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {


    }
])

.controller('nMerosDaSorte2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams) {


    }
])