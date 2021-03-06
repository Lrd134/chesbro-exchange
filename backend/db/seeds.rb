# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or find_or_create_byd alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.find_or_create_by([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.find_or_create_by(name: 'Luke', movie: movies.first)
usd = Token.find_or_create_by(ticker: "usd", name: "Dollar")
btc = Token.find_or_create_by(ticker: "btc", name: "Bitcoin")
eth = Token.find_or_create_by(ticker: "ETH", name: "Ethereum")
doge = Token.find_or_create_by(ticker: "doge", name: "doge")
usdt = Token.find_or_create_by(ticker: "usdt", name: "Tether")
bnb = Token.find_or_create_by(ticker: "bnb", name: "Binance")
larry = User.find_or_create_by(name: "Larry", email:"larryc3200@gmail.com")
nora = User.find_or_create_by(name: "Nora", email:"example@gmail.com")
nora_btc = Balance.find_or_create_by(balance: 0.2432, token: btc, user: nora)
larry_balance1 = Balance.find_or_create_by(balance: 3000.32, token: doge, user: larry)
nora_usd = Balance.find_or_create_by(balance: 10000, token: usd, user: nora)
nora_eth = Balance.find_or_create_by(balance: 1, token: eth, user: nora)
nora_usdt = Balance.find_or_create_by(balance: 1000, token: usdt, user: nora)
larry_usd = Balance.find_or_create_by(balance: 1000, token: usd, user: larry)
larry_bnb = Balance.find_or_create_by(balance: 12, token: bnb, user: larry)
Order.find_or_create_by(user: nora, token: eth, amount: 0.01, sell: 1)
Order.find_or_create_by(user: larry, token: eth, amount: 0.1, sell: 0)
Order.find_or_create_by(user: larry, token: doge, amount: 1500, sell: 1)
Order.find_or_create_by(user: nora, token:doge, amount: 1030, sell: 0)
Order.find_or_create_by(user: nora, token: bnb, amount: 2, sell: 0)
Order.find_or_create_by(user: larry, token: bnb, amount: 10, sell: 1)
Order.find_or_create_by(user: larry, token: usdt, amount: 200, sell: 0)
Order.find_or_create_by(user: nora, token: usdt, amount: 754.3, sell: 1)
Order.find_or_create_by(user: nora, token: btc, amount: 0.0932, sell: 1)
Order.find_or_create_by(user: larry, token: btc, amount: 0.001, sell: 0)
