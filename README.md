# Memory-Game

Start project

```bash
yarn vite
```
Implementation:
- React.
- useContext as state manager because state is pretty small.
- css for styling.
- fetch for API request.

Limitations:
- Can't save move score.
- After page refresh you lose the progress.
- Can't save the progress and come back to it after a while.
- Can't change difficulty/ add more images.
- It's not supporting mobile screens.

Next step:
- Create component for each element and implement atomic design.
- Implement responsive design.
- Use localstorage/API to save progress and to be able to implement some kind of top score and provide possibility for multiplayer.
- Change API to have possibility to use query for changing result quantity(current one return 10 result no matter what).
- Implement difficulty level.
- Add possibility to share the result.
- Add possibility to change image theme(bikes, music, dogs, etc.).
