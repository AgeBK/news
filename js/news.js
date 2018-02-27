(function () {
    'use strict';

    function render(data) {
        if (data.results) {
            var results = data.results;
            var el = document.getElementById('sportsItems');
            var html = '';
            var i = 0;

            for (i; i < results.length; i++) {
                html += '<li class="item">' +
                    '<a href="/">' + results[i].title + '</a>' +
                    '</li>';
            }
            el.innerHTML = html;
        }
    }

    function requestData(url) { 
        var xhr = new XMLHttpRequest();
        var result;

        if (xhr) {
            xhr.open('GET', url, true);
            xhr.onreadystatechange = function () {
                try {
                    if (xhr.readyState === 4 && xhr.status === 200) {
                        result = JSON.parse(xhr.responseText);
                        render(result);
                    }
                } catch (error) {
                    // error handling here
                }
            };
            xhr.onerror = function () {
                // error handling here
            };
            xhr.send();
        }
        else {
            // error handling here 
        }
    }

    var url = location.href.replace(location.pathname, '/js/test-feed.json');
    requestData(url);
})();
