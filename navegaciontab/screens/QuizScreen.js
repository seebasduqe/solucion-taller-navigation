import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const QuizScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const questions = [
    { question: '¿Cuál es la capital de Francia?', options: ['Madrid', 'Berlín', 'París', 'Lisboa'] },
    { question: '¿Qué es React?', options: ['Un framework', 'Una biblioteca', 'Un lenguaje', 'Un editor'] },
    { question: '¿Cuál es el océano más grande?', options: ['Atlántico', 'Índico', 'Pacífico', 'Ártico'] },
  ];

  return (
    <View style={styles.container}>
      {questions.map((q, index) => (
        <View key={index} style={styles.questionContainer}>
          <Text>{q.question}</Text>
          {q.options.map((option, idx) => (
            <Button
              key={idx}
              title={option}
              onPress={() => setSelectedOption(option)}
            />
          ))}
        </View>
      ))}
      {selectedOption && <Text>Has seleccionado: {selectedOption}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  questionContainer: {
    marginBottom: 20,
  },
});

export default QuizScreen;
