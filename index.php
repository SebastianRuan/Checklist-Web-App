<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTML 5 Boilerplate</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="index.css">
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">

</head>
<body>
    <div id="page" class="row">
        
        <!-- Side bar -->
        <div id="group-container" class="col-3">
            <div class="row row-cols-1">
                <div class="group col"> <span>Group 1</span> </div>
                <div class="group col"> Group 1</div>
                <div class="group col"> Group 1</div>
                <div class="group col"> Group 1</div>
                <div class="group col"> Group 1</div>
            </div>
        </div>
    
        <!-- Check list -->
        <div id="check-list-container" class="col">
            <div class="row align-items-center justify-content-center" >
                <div class="col-6">
                    <!-- width of items in this div must be 100% -->
                    <input id="new-todo" type="textbox" placeholder="Enter new todo...">
                    <input class="todo-item" type="textbox">
                    <input class="todo-item" type="textbox">
                    <input class="todo-item" type="textbox">
                    <input class="todo-item" type="textbox">
                    <?php
                        // not getting all library suggestions? Install full version of php
                        $my_var = "HELLO WORLD";
                        // echo $my_var;
                    ?>  
                </div>
            </div>
        </div>
    </div>

    <script src="index.js"></script>
</body>
</html>