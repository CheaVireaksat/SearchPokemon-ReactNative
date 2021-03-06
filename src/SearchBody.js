import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { ListItem, List } from 'native-base';

class SearchBody extends React.Component {
    render() {
        var pokemon = this.props.data;
        if (!pokemon) {
            return <View />
        }
        return (
            <ScrollView style={{ flex: 1 }}>
                <Text style={styles.header}>ID{pokemon.id} - {pokemon.name.toUpperCase()}</Text>
                <View style={styles.viewStyle}>
                    <Image
                        source={{ uri: pokemon.sprites.front_default }}
                        style={styles.img}
                    />
                </View>
                <View style={styles.info}>
                    <ListItem itemDivider>
                        <Text style={{ fontWeight: 'bold' }}>Size</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>Weight - {pokemon.weight}Kg</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>Height - {pokemon.height}Inch</Text>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text style={{ fontWeight: 'bold' }}>Abilities</Text>
                    </ListItem>
                    <List
                        dataArray={pokemon.abilities}
                        renderRow={(item) =>
                            <ListItem>
                                <Text>{item.ability.name}</Text>
                            </ListItem>
                        }
                    >

                    </List>
                </View>
            </ScrollView >
        )
    }
}

const styles = {
    header: {
        fontSize: 30,
        color: 'green',
        textAlign: 'center',
    },
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    img: {
        height: 200,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    info: {
        flex: 1,
        backgroundColor: 'white',
        opacity: 0.8,
    },
}

export default SearchBody;