

array_to_be_grouped.group_by {|item| "stuff to be done to item"}

#OR

hash_to_be_grouped.group_by {|key, value| "stuff to be done to key and/or value"}



hogwarts_students = {
  "Harry Potter" => "Gryffindor",
  "Ron Weasley" => "Gryffindor",
  "Hermione Granger" => "Gryffindor",
  "Draco Malfoy" => "Slytherin",
  "Luna Lovegood" => "Ravenclaw",
  "Cho Chang" => "Ravenclaw",
  "Cedric Diggory" => "Hufflepuff"
}

hogwarts_students.group_by {|student, house| house}

# => {"Gryffindor"=>[["Harry Potter", "Gryffindor"], ["Ron Weasley", "Gryffindor"], ["Hermione Granger", "Gryffindor"]], "Slytherin"=>[["Draco Malfoy", "Slytherin"]], "Ravenclaw"=>[["Luna Lovegood", "Ravenclaw"], ["Cho Chang", "Ravenclaw"]], "Hufflepuff"=>[["Cedric Diggory", "Hufflepuff"]]}

