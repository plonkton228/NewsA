<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600&display=swap" rel="stylesheet">

           
        @viteReactRefresh
        @vite([ 'resources/css/app.css' , 'resources/js/app.jsx'])
    </head>
    <body class="antialiased">

             <div id="app" class = "CustomId" ></div>

    </body>
</html>
