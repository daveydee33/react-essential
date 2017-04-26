const title = React.createElement(
    'h1',
    { id: 'title', className: 'header' },
    'Hola Mundo!'
)

ReactDOM.render(
    title,
    document.getElementById('react-container')
)