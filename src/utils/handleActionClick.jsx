
export const handleActionClick = (action, player, setPlayer, setActions, getRandomActions, setShowPhotoBooth, selectedAction, setSelectedAction) => {
    
    const progressedPlayer = { ...player };
    

    // make player older
    progressedPlayer.age += 10;

    // gameOver
    function gameOver(){
        alert("Game Over")
    };

    // change progress according to props 
    for (const prop in action) {
        
        if (prop !== 'text' && prop !== 'category' && prop !== 'subcategory') {
            progressedPlayer[prop] += action[prop];
            if (progressedPlayer[prop] <= 0) {
                progressedPlayer[prop] = 0;
                gameOver();
            }
            if (progressedPlayer[prop] > 100) progressedPlayer[prop] = 100;
        }
    }

   
    setPlayer(progressedPlayer);
    setActions(getRandomActions);
    setSelectedAction(action);
    // console.log('selectedAction :>> ', selectedAction);
    // console.log('action :>> ', action);
    setShowPhotoBooth(true);

}