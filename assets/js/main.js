
(function($) {

	var	$window = $(window),
		$banner = $('#banner'),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			default:   ['1681px',   null       ],
			xlarge:    ['1281px',   '1680px'   ],
			large:     ['981px',    '1280px'   ],
			medium:    ['737px',    '980px'    ],
			small:     ['481px',    '736px'    ],
			xsmall:    ['361px',    '480px'    ],
			xxsmall:   [null,       '360px'    ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				target: $body,
				visibleClass: 'is-menu-visible',
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right'
			});

})(jQuery);

$('#invite').click(function(){
        //Visto que o 'copy' copia o texto que estiver selecionado, talvez você queira colocar seu valor em um txt escondido
    $('#linkLive').select();
    try {
            var ok = document.execCommand('copy');
            if (ok) {swal("Link da stream copiado com sucesso!", "Basta colar na barra de pesquisa do navegador", "success");
 }
        } catch (e) {
        alert(e)
    }
});


function manual() {

	$("#myModal").modal();

}

/* Smoth scroll */
 jQuery(document).ready(function($) {
   $("#back").click(function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
   });
  });

 /* Alert */
$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});


let themeSwitch = document.querySelector('.themeSwitch');
let body = document.querySelector('body');

// Theme Switch Toggle
themeSwitch.onclick = function() {
	body.classList.toggle('dark')
}