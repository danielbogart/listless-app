$(document).keyup(function(event) {
	if (event.which === 13) {
		var listy = $('.input').val();

		var create = document.createElement('div');
		var createx = document.createElement('div');
		var createtrash = document.createElement('div');

		create.className = 'newitem';
		createx.className = 'crossout';
		createtrash.className = 'trash';
		create.innerHTML = listy;

		if (listy.length === 0) {
			$('.input').attr("placeholder", "Please enter an item");
		}

		else {

			if ($('.newitem').length > 0) {
			
				$('.input').val('');

				$('.newitem:last').after(create)
				$('.newitem:last').append(createx)
				$('.newitem:last').append(createtrash);
				$('.input').attr("placeholder", "Type list item then hit Enter to add");

			}

		else {

				$('.input').val('');

				$('.input').after(create)
				$('.newitem').append(createx)
				$('.newitem').append(createtrash);

			}

		}

	}

	$(document).on('click', '.crossout', function(event) {
		$(this).parent('.newitem').toggleClass('xitem');
		event.stopImmediatePropagation();
	});

	$(this).find('.trash').click(function() {

		$(this).parent().remove();

	})

})
