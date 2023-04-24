const React = require('react')

// const myStyle = {
//     color: '#ffffff',
//     backgroundColor: '#000000',
// };

function Index(props) {
    const { pokemon } = props
    console.log(pokemon);
    return (
        <div>
            <h1>See All The Pokemon!</h1>

            <a href="/pokemon/new">Create A New Pokemon</a>

            <ul>
                {
                    pokemon.map((pokemon, i) => {
                        return (
                            <li key={pokemon._id}>
                                <a href={`/pokemon/${pokemon._id}`}>{pokemon.name.charAt(0).toUpperCase()+ pokemon.name.slice(1)}</a>
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    )
}

module.exports = Index;

