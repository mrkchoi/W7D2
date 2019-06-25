# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do
  Todo.create(title: "Eat more snacks", body: "cookiechips", done: false)
  Todo.create(title: "Study ajax", body: "Solo read for 4 hours", done: false)
  Todo.create(title: "Cook dinner", body: "Sushi? Pizza?", done: false)
  Todo.create(title: "Get more SLEEP!", body: "Sleep at 9pm", done: true)
  Todo.create(title: "Call mom", body: "Tonight", done: true)

end