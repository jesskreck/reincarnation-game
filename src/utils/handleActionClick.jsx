export const handleActionClick = (action, player, setPlayer, setActions, getRandomActions) => {
    
    const progressedPlayer = { ...player };
    console.log('action :>> ', action);

    console.log('progressedPlayer :>> ', progressedPlayer);

    // make player older
    progressedPlayer.age += 10;


    // change progress according to props 
    for (const prop in action) {
        
        if (prop !== 'text' && prop !== 'category' && prop !== 'subcategory') {
            progressedPlayer[prop] += action[prop];
            if (progressedPlayer[prop] < 0) progressedPlayer[prop] = 0;
            if (progressedPlayer[prop] > 100) progressedPlayer[prop] = 100;
        }
    }



    setPlayer(progressedPlayer);
    setActions(getRandomActions);

}