let currentDraggedElement;
let taskStatus;
let movedTask;


/**
 * this function allows to drop an element
 * 
 * @param {Event} ev 
 */
function allowDrop(ev) {
    ev.preventDefault();
    //console.log(ev['srcElement']['id'])
    if (ev['toElement']['id'] == 'to-do-container') {
        console.log('todoContainer')
        document.getElementById('to-do-container').style.marginTop = '200px'
        document.getElementById('todoContainer').style.display = 'flex'
    }
    if (ev['toElement']['id'] == 'await-feedback-container') {
        console.log('await')
        //document.getElementById('to-do-container').style.marginTop = '200px'
    }
    if (ev['toElement']['id'] == 'in-progress-container') {
        console.log('progress')
        //document.getElementById('to-do-container').style.marginTop = '200px'
    }
    if (ev['toElement']['id'] == 'done-container') {
        console.log('done')
        //document.getElementById('to-do-container').style.marginTop = '200px'
    }
    else{
        document.getElementById('to-do-container').style.marginTop = '0'
        document.getElementById('todoContainer').style.display = 'none'
    }
    //console.log(ev['toElement']['id'])
}


/**
 * this function changes the task's status 
 * 
 * @param {string} container 
 */
function moveTo(container) {
    const isGoodValue = val => val && val !== '-' && val !== 'N/A'; /* check for empty arrays*/
    target = container['currentTarget']['id'];
    changeTaskPosition(isGoodValue)
    moveTarget(currentDraggedElement)
}


/**
 * move the tast position
 * 
 * @param {*} isGoodValue 
 */
function changeTaskPosition(isGoodValue) {
    const moveTask = (taskArray) => {
        currentTask = taskArray[movedTask];
        delete taskArray[movedTask];
        return taskArray.filter(isGoodValue);
    };
    if (currentDraggedElement == 'tasksToDo') {
        tasksToDo = moveTask(tasksToDo);
    }
    if (currentDraggedElement == 'tasksInProgress') {
        tasksInProgress = moveTask(tasksInProgress);
    }
    if (currentDraggedElement == 'tasksAwaitFeedback') {
        tasksAwaitFeedback = moveTask(tasksAwaitFeedback);
    }
    if (currentDraggedElement == 'tasksDone') {
        tasksDone = moveTask(tasksDone);
    }
}


/**
 * extension of the change position function
 * 
 * @param {*} isGoodValue 
 * @param {string} taskTypeString 
 * @param {string} taskType 
 */
function changeTaskPositionExtension(isGoodValue, taskTypeString, taskType) {
    if (currentDraggedElement == taskTypeString) {
        currentTask = taskType[movedTask];
        delete taskType[movedTask];
        taskType = taskType.filter(isGoodValue);
    }
}


/**
 * Push the array into a new array
 */
function moveTarget(currentDraggedElement) {
    if (target == 'to-do-container') {
        if (currentDraggedElement == 'tasksToDo') {
        }
        else {
            tasksToDo.push(currentTask);
            window.removeTask(movedTask, `${currentDraggedElement}`, currentTask)
            window.addNewTask(currentTask, 'tasksToDo')
            renderBoard();
        }
    }
    if (target == 'in-progress-container') {
        if (currentDraggedElement == 'tasksInProgress') {
        }
        else {
            tasksInProgress.push(currentTask);
            window.addNewTask(currentTask, 'tasksInProgress')
            window.removeTask(movedTask, `${currentDraggedElement}`, currentTask)
            renderBoard();
        }
    }
    if (target == 'await-feedback-container') {
        if (currentDraggedElement == 'tasksAwaitFeedback') {
        }
        else {
            tasksAwaitFeedback.push(currentTask);
            window.addNewTask(currentTask, 'tasksAwaitFeedback')
            window.removeTask(movedTask, `${currentDraggedElement}`, currentTask)
            renderBoard();
        }

    }
    if (target == 'done-container') {
        if (currentDraggedElement == 'tasksDone') {
        }
        else {
            tasksDone.push(currentTask);
            window.addNewTask(currentTask, 'tasksDone')
            window.removeTask(movedTask, `${currentDraggedElement}`, currentTask)
            renderBoard();
        }

    }
}


/**
 * this function rembers the task to move
 * 
 * @param {number} i 
 * @param {string} taskStatus 
 */
function startDragging(i, taskStatus) {
    console.log(taskStatus)
    movedTask = i;
    currentDraggedElement = taskStatus;
}