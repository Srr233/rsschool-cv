# Siarhei Saltanovich
### My contact
  - Number: +375 (29) 1270709 A1
  - Social networks:
    - [VK](https://vk.com/sr233)
    - [Facebook](https://www.facebook.com/sergey.saltanov)
    - Email: Sr233@yandex.ru
### Summary 
My first and foremost goal become a Junior Developer! I want to create some of cool programs!
I see that, I can try to get it and I need that! I make sure, I will be a good programmer.

### Skills
I know only one programming language: _JavaScript_
- Some framework:
  - Vue framework
  - React Native

And I have created react native app with expo for Android: [MyApp](https://expo.io/dashboard/sulti/builds/0b7453ca-5a64-4816-8f44-45b76bdd0eb4)

My latest code:

    <pre><code>if(canGetData) {
        getData().then(val => {
            if (val !== undefined) {
                getVal = val;
                setPeople(JSON.parse(getVal));
            }
        });
        canGetData = false;
    }

    if (typeof route.params[0] === 'string' && !route.params.hasOwnProperty('name') || route.params.name == '' && typeof route.params[0] === 'string') {
        let deleteId = Object.values(route.params).join('');
        let newArray = [];
        if(deleteId > people[0].id) deleteId = deleteId.slice(0, 13)
        for (let i = 0; i < people.length; i++) {
            if (people[i].id === deleteId) {
                continue;
        }
            newArray.push(people[i])
        }
        removeValue().then(() => {
            if (newArray.length) { 
                storeData(newArray);
            }
        });

        setPeople(newArray);
        console.log('удалили')

        route.params = {};
    }

    if (route.params.name !== '' && route.params.name !== undefined && isTrue) {
        isTrue = false;
        let newArray = [];
        for (let i = 0; i < people.length; i++) {
            
            if(people[i].id === route.params.id) {
                let newObj = {
                    name: route.params.name,
                    uri: route.params.uri,
                    info: route.params.info,
                    id: route.params.id
                };
                newArray.push(newObj);

                continue;
            }
            newArray.push(people[i])
        }
        setPeople(newArray);
        storeData(newArray);
        route.params = {};
    }

    const addPerson = () => {
        if (newPerson) {
                setPeople(prev => {
                    let newArrPers = [...prev, {
                        name: newPerson,
                        uri: '',
                        info: '',
                        id: Date.now().toString()
                    }]; 
                    storeData(newArrPers);
                    return newArrPers;
                });
            setNewPerson(prev => '');
        }
    }
    
    return (
    <View style={styles.app}>
      <View>
        <TextInput style={styles.input} placeholder="Введите имя" defaultValue={newPerson} onChangeText={setNewPerson}/>
        <Button style={styles.buttonAdd} onPress={addPerson} title="Добавить"></Button>
      </View>
      <ScrollView style={styles.scroll}>
        {people.map(person => (
                <TouchableOpacity
                    onPress={() => {
                        isTrue = true;
                        navigation.navigate('User', person)
                        }} key={person.id}>
                    <View style={styles.person}>
                        <Text style={styles.personName}>{person.name}</Text>
                    </View>
                </TouchableOpacity>
            ))}
      </ScrollView>
    </View>
    )}</code></pre>`