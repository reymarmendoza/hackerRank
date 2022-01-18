function processData(input) {
  const arr = input.split('\n')
  let phonebook = {}
  arr[0] = parseInt(arr[0])

  for (let i = 1; i <= arr[0]; i++) {
    const [name, number] = arr[i].split(' ')
    phonebook[name] = number
  }

  for (let i = arr[0] + 1; i < arr.length; i++) {
    if (phonebook[arr[i]]) {
      console.log(`${arr[i]}=${phonebook[arr[i]]}`)
    } else {
      console.log('Not found')
    }
  }
}

process.stdin.resume()
process.stdin.setEncoding('ascii')
_input = ''
process.stdin.on('data', function (input) {
  _input += input
})

process.stdin.on('end', function () {
  processData(_input)
})

/**
Given  names and phone numbers, assemble a phone book that maps friends' names to their respective phone numbers. You will then be given an unknown number of names to query your phone book for. For each  queried, print the associated entry from your phone book on a new line in the form name=phoneNumber; if an entry for  is not found, print Not found instead.

Note: Your phone book should be a Dictionary/Map/HashMap data structure.

Input Format

The first line contains an integer, , denoting the number of entries in the phone book.
Each of the  subsequent lines describes an entry in the form of  space-separated values on a single line. The first value is a friend's name, and the second value is an -digit phone number.

After the  lines of phone book entries, there are an unknown number of lines of queries. Each line (query) contains a  to look up, and you must continue reading lines until there is no more input.
*/