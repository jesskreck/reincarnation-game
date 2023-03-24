
export const handleActionClick = (action, player, setPlayer, setActions, getRandomActions, setShowPhotoBooth) => {
    
    const progressedPlayer = { ...player };
    console.log('action :>> ', action);

    console.log('progressedPlayer :>> ', progressedPlayer);

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


    setShowPhotoBooth(true);
    setPlayer(progressedPlayer);
    setActions(getRandomActions);

}