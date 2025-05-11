import { View, Text, StyleSheet, TextInput, Platform, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useFitness } from '../context/FitnessContext';

export default function DiaryScreen() {
  const {
    calorieGoal,
    setCalorieGoal,
    foodCalories,
    setFoodCalories,
    exerciseCalories,
    setExerciseCalories,
  } = useFitness();
  const remainingCalories = calorieGoal - foodCalories + exerciseCalories;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Diary</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Calories</Text>
          <View style={styles.row}><Text style={styles.label}>Goal</Text><Text style={styles.value}>{calorieGoal}</Text></View>
          <View style={styles.row}><Text style={styles.label}>Food</Text><Text style={styles.value}>{foodCalories}</Text></View>
          <View style={styles.row}><Text style={styles.label}>Exercise</Text><Text style={styles.value}>{exerciseCalories}</Text></View>
          <View style={styles.row}><Text style={styles.label}>Remaining</Text><Text style={styles.value}>{remainingCalories}</Text></View>
          <View style={styles.inputRow}>
            <Text style={styles.inputLabel}>Food:</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={foodCalories.toString()}
              onChangeText={text => setFoodCalories(Number(text) || 0)}
              placeholder="0"
              placeholderTextColor="#888"
            />
            <Text style={styles.inputLabel}>Exercise:</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={exerciseCalories.toString()}
              onChangeText={text => setExerciseCalories(Number(text) || 0)}
              placeholder="0"
              placeholderTextColor="#888"
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181A20',
    padding: 16,
  },
  title: {
    color: '#4FC3F7',
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 60,
    marginBottom: 16,
    letterSpacing: 1.5,
  },
  card: {
    backgroundColor: '#23263A',
    borderRadius: 18,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  cardTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  label: {
    color: '#aaa',
    fontSize: 15,
  },
  value: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  inputLabel: {
    color: '#aaa',
    fontSize: 15,
    marginRight: 6,
  },
  input: {
    backgroundColor: '#181A20',
    color: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === 'ios' ? 8 : 4,
    fontSize: 15,
    width: 70,
    marginRight: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
}); 