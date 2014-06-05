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
			//This line may have caused problems with crossing out
		}

		else {

			if ($('.newitem').length > 0) {
			
				$('.input').val('');

				$('.newitem:last').after(create)
				$('.newitem:last').append(createx)
				$('.newitem:last').append(createtrash);
				$('.input').attr("placeholder", "Type list item then hit Enter to add");

				var checked = 0;
			}

		else {

				$('.input').val('');

				$('.input').after(create)
				$('.newitem').append(createx)
				$('.newitem').append(createtrash);

				var checked = 0;
		}

	}

	}

	$(this).find('.crossout').click(function() {
		
		if (checked === 1) {
			$(this).closest('.newitem').css({'opacity': '1', 'text-decoration': 'none'});
			checked = 0;
		}

		else {
			$(this).closest('.newitem').css({'opacity': '.5', 'text-decoration': 'line-through'});
			checked = 1;
		}
	})

	$(this).find('.trash').click(function() {

		$(this).parent().remove();

	})

})
