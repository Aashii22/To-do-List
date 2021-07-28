
$(document).ready(function(){

    let ulTasks= $('#ulTasks');
    let btnAdd= $('#btnAdd');
    let btnReset= $('#btnReset');
    let btnSort= $('#btnSort');
    let btnCleanUp= $('#btnCleanUp');
    let inpNewTask= $('#inpNewTask');
    let btnShowHide= $('#btnShowHide');

    function addItem(){

        let listItem= $('<li>',{
            'class': 'liItems',
            'text' : inpNewTask.val()
        });
        
        listItem.dblclick(function(){
            listItem.attr({'contenteditable':true,
            'spellcheck':false});
        });

        listItem.click(function(){
            listItem.toggleClass('done');
        });

        ulTasks.append(listItem);
        inpNewTask.val("");
    }

    function clearAllDoneTasks(){
        console.log($('#ulTasks .liItems.done'));
        $('#ulTasks .liItems.done').remove();
    }

    function sort(){
        $('#ulTasks .liItems.done').appendTo(ulTasks);
    }

    function inputButtons(){
        btnAdd.prop('disabled',inpNewTask.val()=='');

        btnReset.prop('disabled',ulTasks.children().length==0);
        btnSort.prop('disabled',ulTasks.children().length==0);
        btnCleanUp.prop('disabled',ulTasks.children().length==0);
        btnShowHide.prop('disabled',ulTasks.children().length==0);
    }


    btnAdd.click(function(){
        addItem();
        inputButtons();
        $('#ulTasks .liItems').attr('contenteditable',false);
    });

    btnReset.click(function(){
        $('#ulTasks .liItems').remove();
        inputButtons();
        $('#ulTasks .liItems').attr('contenteditable',false);
    });

    btnSort.click(function(){
        sort();
        inputButtons();
        $('#ulTasks .liItems').attr('contenteditable',false);
    });

    btnCleanUp.click(function(){
        clearAllDoneTasks();
        inputButtons();
        $('#ulTasks .liItems').attr('contenteditable',false);
    });

    inpNewTask.keypress(function(e){
        if(e.which==13){
            addItem();
            inputButtons();
            $('#ulTasks .liItems').attr('contenteditable',false);
        }
    });

    inpNewTask.on('input',function(){
        inputButtons();
        $('#ulTasks .liItems').attr('contenteditable',false);
    });

    btnShowHide.click(function(){
        $('#ulTasks .liItems').toggle('slow');

        
        if($('#ulTasks .liItems').is(':visible'))
        btnShowHide.text("Hide");
        else
        btnShowHide.text("Show");

        $('#ulTasks .liItems').attr('contenteditable',false);
    });

});