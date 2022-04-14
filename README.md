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

## Ferramentas utilizadas

* Javascript com NodeJs
* Express

## Dependências necessárias para uso

```json
"dependencies": {
    "axios": "^0.26.1",
    "cors": "^2.8.5",
    "express": "^4.17.3",
    "dotenv": "^16.0.0"
```

## Exemplo de rota

A no link https://api-google-geolocation.herokuapp.com , podemos usar a rota "/" e especificarmos os endereços como no exemplo abaixo.

```url
https://api-google-geolocation.herokuapp.com/?address1=Rua+19+de+Fevereiro,+34+Botafogo,+Rio+de+Janeiro+RJ,+22280%E2%80%8B030&address2=Av.+Rio+Branco,+1+Centro,+Rio+de+Janeiro+RJ,+20090%E2%80%8B003&address3=Pra%C3%A7a+Mal.+%C3%82ncora,+122+Centro,+Rio+de+Janeiro+RJ,+20021%E2%80%8B200

```