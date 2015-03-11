var assert = chai.assert;
//var converted;
//var original;

suite('csv', function() {
	if (typeof __html__ !== 'undefined') {
              document.body.innerHTML = __html__['tests/karmatest.html'];
              original = document.getElementById('original');
	          finaltable = document.getElementById('finaltable');

          }   
	test('2, 4, "hola"', function() {
		original.value = '2, 4, "hola"';
		calculate();
		
		assert.deepEqual(finaltable.children[1].children[0].children[0].children[0].innerHTML, "2");
	});
	
	test('2, 4, "hola"', function() {
		original.value = '2, 4, "hola"';
		calculate();
		assert.deepEqual(finaltable.children[1].children[0].children[0].children[1].innerHTML, " 4");
	});

	test('2, 4, "hola"', function() {
		original.value = '2, 4, "hola"';
		calculate();
		assert.deepEqual(finaltable.children[1].children[0].children[0].children[2].innerHTML, "hola");
	});
	
	
});