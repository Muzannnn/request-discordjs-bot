
# Requests discord.js BOT
With this bot you can send private messages to users of your discord server via post requests.

## Installation

- Install Node.js 18
- Clone this repo
- Run `npm i`
- Copy `.env.example` and rename it to `.env` and change the variables
- Run `npm start`
- It's ✨ work ✨


    
## API Reference

#### Send DM to user

```http
  POST /examplewithmessage
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `user` | `string` | **Required**. User id |

#### Send DM embed to user

```http
  POST /examplewithembed
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `user` | `string` | **Required**. User id |

#### Send embed to Channel

```http
  POST /examplewithmessageforchannel
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `channel` | `number` | **Required**. Channel id |



## Authors

- [@Muzan](https://github.com/Muzannnn)


## License

[MIT License](https://choosealicense.com/licenses/mit/)

