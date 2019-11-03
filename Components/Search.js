import React from 'react'
import { Text, FlatList, View, Button, TextInput, StyleSheet } from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'

class Search extends React.Component {

    constructor(props) {
        super(props)
        this.state = { 
            films: [], 
        }
        this.searchedText = ""

    }


    _loadFilms() {
        if (this.searchedText.length > 0 ) {
        getFilmsFromApiWithSearchedText(this.searchedText).then(data => this.setState({ films: data.results }))
        }
    }

    _searchTextInputChanged(text) {
        this.searchedText = text
    }

    render() {
        return (
            <View style={ styles.main_container }> 
                <TextInput onChangeText={(text) => this._searchTextInputChanged(text)} style={styles.textinput} placeholder="Titre de film"/>
                <Button style={{ height: 50}} title="Rechercher" onPress={() => this._loadFilms()}/>
                <FlatList 
                    data={this.state.films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <FilmItem film={item}/>}
                />
            </View>
        )   
    }
}

const styles = StyleSheet.create ({
    main_container: {
        marginTop: 20,
        flex: 1
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    }

})

export default Search;