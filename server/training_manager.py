import json

def trainer(data):
    with open('intents.json','r') as intent_file:
        existing_data = json.load(intent_file)


    # print(existing_data['intents'])
    data['answers'] = [answer for answer in data['answers'] if answer.strip()]

    tag = data['intent']
    pattern = data['questions']
    response = data['answers']
    new_intent = {
    'tag': tag,
    'patterns': pattern,
    'responses': response
    }

    # adding the new intent to the existing intents
    existing_data['intents'].append(new_intent)  
    
     # Write the updated data back to the file
    with open('intents.json', 'w') as intent_file:
        json.dump(existing_data, intent_file, indent=2) 
    
    
    print(existing_data['intents'])

    
    

