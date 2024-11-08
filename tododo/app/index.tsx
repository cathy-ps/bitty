import { Text, View, SafeAreaView, Image, Button} from "react-native";
import React, { useState} from "react";
// export default function Index() {
//   return ( 
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }} 

//       // this whole block is like a html tag - from <View> to </View>
//     >
//       <Text>Edit app/index.tsx to edit this screen.</Text>
//     </View>
//   );
// }

type CatProps = {
  name: string;
  url: string;

}

const Cat = (props: CatProps) => {
  const [isFed, setIsFed] = useState(false);
  // const detail = (fav_food: string, fav_toy: string, nap_time: number) => { //nap time in hours
  //   return `Hi, my name is ${name}. I love to eat ${fav_food}, play with my ${fav_toy}, and nap for ${nap_time} hours.`;
  // }
  // let name = "Maru";
  // let age = 3; // years old
  // let breed = "Scottish Fold";
  // return <Text> {detail("tuna", "catnip", 3)} </Text>;
  return (
    <View>
      <Image source={{ uri: props.url}} width={120} height ={250} />
      <Text>{`Hi, my name is ${props.name} and above is my photo`}</Text>
      <Button title={isFed ? "You're already fed me, I'm a happy cat~" : "I'm really hungry, Please feed me!!"} onPress={() => setIsFed(true)}></Button>
    </View>
  )
}


const Index = () => {
  return (
    <SafeAreaView>
      <Cat name="Maru" url="https://viralcats.net/blog/wp-content/uploads/2020/02/I-go-to-the-kitchen-and-come-back-to-this-my-seat-stolen-he-is-just-too-cute-to-move-by-Tracey-Gilmour.jpg"/>
      <Cat name="Mary" url="https://viralcats.net/blog/wp-content/uploads/2020/02/Lily-by-Catherine-Bourbonnais.jpg"/>
    </SafeAreaView>
  )
}

export default Index;

