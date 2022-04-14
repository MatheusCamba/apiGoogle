# API do tipo Rest em NodeJs com o framework express

## Aplicação

A aplicação consiste em consumir a API Geocoding do Google e retornar as distancias de endereços distintos. A organização foi feita com conceitos de MVC além do padrão REST.

A aplicação deve retornar nesse modelo:

```json
{
	"close": {
		"path": {
			"startingPoint": "Av.+Rio+Branco,+1+Centro,+Rio+de+Janeiro+RJ,+20090​003",
			"destiny": "Praça+Mal.+Âncora,+122+Centro,+Rio+de+Janeiro+RJ,+20021​200"
		},
		"distance": 0.011921952761606592
	},
	"futher": {
		"path": {
			"startingPoint": "Av.+Rio+Branco,+1+Centro,+Rio+de+Janeiro+RJ,+20090​003",
			"destiny": "Rua+19+de+Fevereiro,+34+Botafogo,+Rio+de+Janeiro+RJ,+22280​030"
		},
		"distance": 0.05389910936592824
	}
}
```