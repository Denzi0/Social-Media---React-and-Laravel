<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <script src="{{ asset('js/app.js') }}" defer></script>
        <script src="https://cdn.tailwindcss.com"></script>

    </head>
    <body class="antialiased">
        <div id="app"></div>
    </body>
</html>
