import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProgrammingLanguagesScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Мои языки программирования: Java(+Spring), C#(Немного Unity), Python(На уровни написания автотестов), JavaScript(в меньшей степени).</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
    },
});
