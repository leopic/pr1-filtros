angular.module('proyectoUno', [])
    /**
     * Extrae la lista de valores de un objeto bajo la llave
     * @param entrada: array de objetos
     * @param valorASerExtraido: llave a extraer
     */
    .filter('extractor', function() {
        return function(entrada, valorASerExtraido) {
            var listaDeValores = [];
            angular.forEach(entrada, function(valor) {
                if (valor && valor[valorASerExtraido]) {
                    listaDeValores.push(valor[valorASerExtraido]);
                }
            });
            return listaDeValores;
        };
    })
    /**
     * Genera un listado basado en los contenidos de un array.
     * @param entrada: array
     * @param separador: `,`
     */
    .filter('agregador', function() {
        return function(entrada, separador) {
            // Si tenemos algún valor
            if (entrada) {
                // Y el valor es un array
                if (angular.isArray(entrada)) {
                    // Y el valor tiene por lo menos una entrada
                    if (entrada.length) {
                        // El separador que usaremos si no se brinda uno es `,`
                        if (!separador) {
                            separador = ',';
                        }

                        return entrada.join(separador);
                    }
                }
            }
        }
    })
    /**
     * Llama a array.sort() sobre una lista
     * @param entrada: array a ordenar
     */
    .filter('ordenador', function() {
        return function(entrada) {
            if (entrada && angular.isArray(entrada) && entrada.length) {
                return entrada.sort();
            }
        }
    })
    .controller('ProyectoUnoController',
        ['$scope', 'extractorFilter', function ($scope, extractorFilter) {
            $scope.init = function() {
                $scope.tecnologias = [
                    { nombre: 'JavaScript', frontEnd: true },
                    { nombre: 'HTML', frontEnd: true },
                    { nombre: 'CSS', frontEnd: true },
                    { nombre: 'PHP', frontEnd: false}
                ];

                // Usando un filtro desde el controlador
                $scope.tecnologiasComoLista = extractorFilter($scope.tecnologias, 'nombre')
            };

            $scope.init();
        }])
;
