// Initialize when Elementor frontend is ready
jQuery(window).on('elementor/frontend/init', function () {

    // About Widget Counter
    elementorFrontend.hooks.addAction('frontend/element_ready/webbricks-about-widget.default', function ($scope, $) {
        $scope.find('.about-counter-js').counterUp({
            delay: 10,
            time: 2000
        });
    });

    // Blog Carousel Widget
    elementorFrontend.hooks.addAction('frontend/element_ready/webbricks-blog-carousel-widget.default', function ($scope, $) {
        var blog_carousel = $scope.find('.blog-carousel');
        var blog_items = blog_carousel.attr('blog-items');
        var blog_arrows = blog_carousel.attr('blog-arrows');
        var blog_loops = blog_carousel.attr('blog-loops');
        var blog_pause = blog_carousel.attr('blog-pause');
        var blog_autoplay = blog_carousel.attr('blog-autoplay');
        var blog_autoplay_speed = blog_carousel.attr('blog-autoplay-speed');
        var blog_autoplay_animation = blog_carousel.attr('blog-autoplay-animation');
    
        // Initialize Owl Carousel for Blog Carousel
        blog_carousel.owlCarousel({
            dots: true,
            loop: true,
            autoplay: blog_autoplay,
            margin: 30,
            nav: blog_arrows,
            autoplayTimeout: blog_autoplay_animation,
            autoplaySpeed: blog_autoplay_speed,
            autoplayHoverPause: blog_pause,
            items: blog_items,
            navText: ["<div class='carousel-arrow-border'><i class='fas fa-arrow-left'></i></div>", "<div class='carousel-arrow-border'><i class='fas fa-arrow-right'></i></div>"],
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: blog_items,
                    nav: blog_arrows,
                    loop: blog_loops,
                }
            }
        });
    
        // Equalize blog heights right after initialization
        setTimeout(function() {
            equalizeBlogHeights(blog_carousel);
        }, 100); // Adjust the timeout as needed
    
        // Equalize blog heights on each slide change
        blog_carousel.on('changed.owl.carousel', function(event) {
            setTimeout(function() {
                equalizeBlogHeights(blog_carousel);
            }, 100); // Adjust the timeout as needed
        });
    
        function equalizeBlogHeights(carousel) {
            var maxHeight = 0;
    
            carousel.find(".single-blog").css("height", "auto");
    
            carousel.find(".single-blog").each(function() {
                var currentHeight = $(this).height();
                maxHeight = currentHeight > maxHeight ? currentHeight : maxHeight;
            });
    
            carousel.find(".single-blog").height(maxHeight);
        }
    });
    

    // Counter Widget
    elementorFrontend.hooks.addAction('frontend/element_ready/webbricks-counter-widget.default', function ($scope, $) {
        $scope.find('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    });

    // FAQ Widget
    elementorFrontend.hooks.addAction('frontend/element_ready/webbricks-faq-widget.default', function ($scope, $) {
        // Initial setup for FAQ
        $('.faq > li:eq(0) span').addClass('active').next().slideDown();

        // Handle click on FAQ items
        $('.faq span').click(function (j) {
            var dropDown = $(this).closest('li').find('p');

            // Close other FAQ items
            $(this).closest('.faq').find('p').not(dropDown).slideUp();

            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
            } else {
                // Toggle active class
                $(this).closest('.faq').find('span.active').removeClass('active');
                $(this).addClass('active');
            }

            // Toggle dropdown
            dropDown.stop(false, true).slideToggle();
            j.preventDefault();
        });
    });

    // Testimonial Widget
    elementorFrontend.hooks.addAction('frontend/element_ready/webbricks-testimonial-widget.default', function ($scope, $) {
        var testimonial_widget = $scope.find('.testimonials');
        var testimonial_dots = testimonial_widget.attr('testimonial-dots');
        var testimonial_loops = testimonial_widget.attr('testimonial-loops');
        var testimonial_autoplay = testimonial_widget.attr('testimonial-autoplay');
        var testimonial_pause = testimonial_widget.attr('testimonial-pause');
        var testimonial_autoplay_speed = testimonial_widget.attr('testimonial-autoplay-speed');
        var testimonial_autoplay_animation = testimonial_widget.attr('testimonial-autoplay-animation');

        // Initialize Owl Carousel for Testimonial Widget
        testimonial_widget.owlCarousel({
            nav: true,
            dots: testimonial_dots,
            autoplay: testimonial_autoplay,
            autoplayTimeout: testimonial_autoplay_animation,
            autoplaySpeed: testimonial_autoplay_speed,
            autoplayHoverPause: testimonial_pause,
            loop: testimonial_loops,
            items: 1,
            navText: ["<div class='testimonial-arrow testimonial-arrow-left'><i class='fas fa-arrow-left'></i></div>", "<div class='testimonial-arrow testimonial-arrow-right'><i class='fas fa-arrow-right'></i></div>"],
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 1,
                    nav: false
                },
                1000: {
                    items: 1,
                    nav: true,
                }
            }
        });
    });

    // Team Carousel Widget
    elementorFrontend.hooks.addAction('frontend/element_ready/webbricks-team-carousel-widget.default', function ($scope, $) {
        var team_carousel = $scope.find('.team-carousel');
        var team_items = team_carousel.attr('team-items');
        var team_arrows = team_carousel.attr('team-arrows');
        var team_loops = team_carousel.attr('team-loops');
        var team_pause = team_carousel.attr('team-pause');
        var team_autoplay = team_carousel.attr('team-autoplay');
        var team_autoplay_speed = team_carousel.attr('team-autoplay-speed');
        var team_autoplay_animation = team_carousel.attr('team-autoplay-animation');

        // Initialize Owl Carousel for Team Carousel
        team_carousel.owlCarousel({
            dots: true,
            nav: team_arrows,
            margin: 30,
            autoplay: team_autoplay,
            autoplayTimeout: team_autoplay_animation,
            autoplaySpeed: team_autoplay_speed,
            autoplayHoverPause: team_pause,
            loop: team_loops,
            navText: ["<div class='carousel-arrow-border'><i class='fas fa-arrow-left'></i></div>", "<div class='carousel-arrow-border'><i class='fas fa-arrow-right'></i></div>"],
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: team_items,
                    nav: team_arrows,
                    loop: team_loops,
                }
            }
        });
    });

    // Slider Widget
    elementorFrontend.hooks.addAction('frontend/element_ready/webbricks-slider-widget.default', function ($scope, $) {
        var slider_widget = $scope.find('.sliders');
        var slider_arrows = slider_widget.attr('slider-arrows');
        var slider_dots = slider_widget.attr('slider-dots');
        var slider_loops = slider_widget.attr('slider-loop');
        var slider_autoplay = slider_widget.attr('slider-autoplay');
        var slider_autoplaytimeout = slider_widget.attr('slider-autoplaytimeout');
        var slider_autoplayspeed = slider_widget.attr('slider-autoplayspeed');

        // Initialize Owl Carousel for Slider Widget
        slider_widget.owlCarousel({
            nav: slider_arrows,
            dots: slider_dots,
            autoplay: slider_autoplay,
            autoplaySpeed: slider_autoplaytimeout,
            autoplayTimeout: slider_autoplayspeed,
            loop: slider_loops,
            items: 1,
            margin: 32,
            autoplayHoverPause: true,
            navText: ["<div class='slider-arrow slider-arrow-left'><i class='fas fa-arrow-left'></i></div>", "<div class='slider-arrow slider-arrow-right'><i class='fas fa-arrow-right'></i></div>"]
        });
    });

    // Services Widget
    elementorFrontend.hooks.addAction('frontend/element_ready/webbricks-services-widget.default', function ($scope, $) {
        var service_widget = $scope.find('.services');
        var services_scroll = service_widget.attr('services-scroll');
        var services_loop = service_widget.attr('services-loop');
        var services_autoplay = service_widget.attr('services-autoplay');
        var services_arrows = service_widget.attr('services-arrows');
        var services_pause = service_widget.attr('services-pause');
        var services_autoplay_speed = service_widget.attr('services-autoplay-speed');
        var services_autoplay_animation = service_widget.attr('services-autoplay-animation');

        // Initialize Owl Carousel for Services Widget
        service_widget.owlCarousel({
            nav: services_arrows,
            dots: false,
            autoplay: services_autoplay,
            autoplayHoverPause: services_pause,
            autoplaySpeed: services_autoplay_speed,
            margin: 20,
            autoHeight: true,
            autoplayTimeout: services_autoplay_animation,
            navText: ["<div class='carousel-arrow-border'><i class='fas fa-arrow-left'></i></div>", "<div class='carousel-arrow-border'><i class='fas fa-arrow-right'></i></div>"],
            onInitialized: setOwlItemHeight,
            onChanged: setOwlItemHeight,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: services_scroll,
                    nav: services_arrows,
                    loop: services_loop,
                }
            }
        });

        // Function to set equal height for Owl Carousel items
        function setOwlItemHeight(event) {
            // Reset heights
            $('.owl-item > div').css('height', 'auto');

            // Set equal height based on the tallest item
            var maxHeight = 0;
            $('.owl-item', event.target).each(function () {
                var itemHeight = $(this).height();
                maxHeight = Math.max(maxHeight, itemHeight);
            });

            $('.owl-item > div', event.target).height(maxHeight);
        }
    });

    // Products Category Carousel Widget
    elementorFrontend.hooks.addAction('frontend/element_ready/webbricks-products-category-carousel-widget.default', function ($scope, $) {
        var product_category_carousel = $scope.find('.product-category-carousel');
        var product_category_carousel_items = product_category_carousel.attr('product-category-carousel-items');
        var product_category_carousel_arrows = product_category_carousel.attr('product-category-carousel-arrows');
        var product_category_carousel_loops = product_category_carousel.attr('product-category-carousel-loops');
        var product_category_carousel_pause = product_category_carousel.attr('product-category-carousel-pause');
        var product_category_carousel_autoplay = product_category_carousel.attr('product-category-carousel-autoplay');
        var product_category_carousel_autoplay_speed = product_category_carousel.attr('product-category-carousel-autoplay-speed');
        var product_category_carousel_autoplay_animation = product_category_carousel.attr('product-category-carousel-autoplay-animation');

        // Initialize Owl Carousel for Product Category Carousel Widget
        product_category_carousel.owlCarousel({
            items: product_category_carousel_items,
            dots: false,
            nav: product_category_carousel_arrows,
            margin: 30,
            autoplay: product_category_carousel_autoplay,
            autoplayTimeout: product_category_carousel_autoplay_animation,
            autoplaySpeed: product_category_carousel_autoplay_speed,
            autoplayHoverPause: product_category_carousel_pause,
            loop: product_category_carousel_loops,
            navText: ["<div class='carousel-arrow-border'><i class='fas fa-arrow-left'></i></div>", "<div class='carousel-arrow-border'><i class='fas fa-arrow-right'></i></div>"],
        });
    });

    // Products Carousel Widget
    elementorFrontend.hooks.addAction('frontend/element_ready/webbricks-products-carousel-widget.default', function ($scope, $) {
        var products_carousel = $scope.find('.products-carousel');
    
        products_carousel.owlCarousel({
            nav: products_carousel.attr('products-arrows'),
            dots: false,
            autoplay: products_carousel.attr('products-autoplay'),
            autoplayHoverPause: products_carousel.attr('products-pause'),
            autoplaySpeed: products_carousel.attr('products-autoplay-speed'),
            margin: 20,
            autoHeight: true,
            autoplayTimeout: products_carousel.attr('products-autoplay-animation'),
            navText: ["<div class='carousel-arrow-border'><i class='fas fa-arrow-left'></i></div>", "<div class='carousel-arrow-border'><i class='fas fa-arrow-right'></i></div>"],
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: products_carousel.attr('products-scroll'),
                    nav: products_carousel.attr('products-arrows'),
                    loop: products_carousel.attr('products-loop'),
                }
            },
            onInitialized: function (event) {
                equalizeProductHeightsByRow(event);
            },
            onTranslated: function (event) {
                equalizeProductHeightsByRow(event);
            }
        });
    
        function equalizeProductHeightsByRow(event) {
            var $currentSlide = $(event.target).find('.owl-item.active');
            var $products = $currentSlide.find('.single-product');
    
            // Reset heights
            $products.css('height', 'auto');
    
            var rowHeights = [];
    
            $products.each(function () {
                var $product = $(this);
                var productTop = $product.position().top;
    
                if (typeof rowHeights[productTop] === 'undefined') {
                    rowHeights[productTop] = 0;
                }
    
                rowHeights[productTop] = Math.max(rowHeights[productTop], $product.outerHeight());
            });
    
            $products.each(function () {
                var $product = $(this);
                var productTop = $product.position().top;
    
                $product.outerHeight(rowHeights[productTop]);
            });
        }
    });
    


    // Filter Gallery Widget
    elementorFrontend.hooks.addAction('frontend/element_ready/webbricks-filter-gallery-widget.default', function ($scope, $) {
        function equalizeImageHeights() {
            var maxHeight = 0;

            $(".grid-active .single-filter-gallery img").each(function() {
                $(this).height('auto'); // Reset height to auto
                var currentHeight = $(this).height();
                maxHeight = currentHeight > maxHeight ? currentHeight : maxHeight;
            });

            $(".grid-active .single-filter-gallery img").height(maxHeight);
        }

        // Isotope Active
        var grid = $(".grid-active").isotope({
            itemSelector: ".grid-item",
            percentPosition: true,
            masonry: {
                columnWidth: ".grid-item"
            }
        });

        // Ensure images are loaded before initializing Isotope and calculating heights
        $(".grid-item img").imagesLoaded(function () {
            // Initialize Isotope
            grid.isotope();

            // Equalize image heights after loading
            equalizeImageHeights();
        });

        // Filter Gallery Menu Click
        $(".filter-gallery-menu").on("click", "button", function () {
            var filterValue = $(this).attr("data-filter");
            grid.isotope({
                filter: filterValue
            });

            // Equalize image heights after filtering
            setTimeout(function() {
                equalizeImageHeights();
            }, 300); // Adjust the timeout as needed

            // Isotope Menu Active
            $(this).addClass("active").siblings().removeClass("active");
        });

        // Ensure images are loaded before calculating heights after filtering
        grid.on('arrangeComplete', function() {
            $(".grid-item img").imagesLoaded(function () {
                equalizeImageHeights();
            });
        });
    });

});