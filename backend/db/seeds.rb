# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

btc = Token.create(ticker: "btc", name: "Bitcoin")
eth = Token.create(ticker: "ETH", name: "Ethereum")
doge = Token.create(ticker: "doge", name: "doge")
usdt = Token.create(ticker: "usdt", name: "Tether")
bnb = Token.create(ticker: "bnb", name: "Binance")
larry = User.create(name: "Larry", email:"larryc3200@gmail.com")
nora = User.create(name: "Nora", email:"example@gmail.com")
Balance.create(balance: 0.2432, token: btc, user: nora)
Balance.create(balance: 3000.32, token: doge, user: larry)
