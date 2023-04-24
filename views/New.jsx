const React = require('react')


function New() {
    return (
        <div>
            <h1>Create New Pokemon</h1>
            <form action="/pokemon" method="POST">
                Name: <input type="text" name="name" />
                <br />
                <br />

                Image: <input type="text" name="img" />
                <br />
                <br />

                <input type="submit" name="" value="Create" />
            </form>
        </div>
    )
}

module.exports =  New;