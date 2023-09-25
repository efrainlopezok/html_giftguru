	
jQuery(document).ready(function($) {

	/* Tooltips and popovers init */
	/*$('[data-toggle="tooltip"]').tooltip();*/
	$('[data-toggle="popover"]').popover();

	if ($.fn.jBox) {
		$('[data-toggle="tooltip"]').jBox('Tooltip', {
			pointer: 'left:3px',
			position: {
				x: 'right',
				y: 'bottom'
			},
			offset: {
				x: 10,
			}
		});
	}

	/**Modal*/
	/* modal vertical position */
	function reposition_modal() {
		var modal = $(this),
			dialog = modal.find('.modal-dialog');
		modal.css('display', 'block');
		dialog.css('margin-top', 200);
	}
	jQuery('.logged .modal').on('show.bs.modal', reposition_modal);
	jQuery(window).resize(function() {
		$('.logged .modal.visible').each(reposition_modal);
	});

	/* recprofile recipients */
	$('#recipient-type').change(function() {
		show_rec_step($(this).val());
	});
	$('.goto-step').click(function(e) {
		e.preventDefault();
		show_rec_step($(this).attr('data-step'));
	});

	function show_rec_step(rec_step_indicator) {
		$('.recprofile .modal-recipient .modal-body .step:not(.hidden)').addClass('hidden');
		$('[data-step="'+rec_step_indicator+'"]').removeClass('hidden');
	}

});