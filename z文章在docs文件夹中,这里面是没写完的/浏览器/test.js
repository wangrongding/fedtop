function test() {
  // setInterval(() => {
  //   console.log(1)
  // }, 0)
  // setInterval('eval()', 0)
}

test()

var intervalID = setInterval(myCallback, 1000, 'Parameter 1111', 'Parameter 2')

function myCallback(a, b) {
  // Your code here
  // Parameters are purely optional.
  console.log(a)
  console.log(b)
}
