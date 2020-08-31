import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import Banner from '../components/Banner';
import Heading from '../components/Heading';
import FilterBar from '../components/FilterBar';
import ProductCard from '../components/ProductCard';
import FadeInView from '../utils/FadeInView.js'
import theme from '../../src/styles/theme.styles'

const BASE_URL = 'https://raw.githubusercontent.com/stephenscaff/demo-content/master/images/shoes/';
const bannerImage = `${BASE_URL}/etq-banner-5.jpg`;

const products = [
  {
    name: 'ETQ LT 01 Black',
    price: 220,
    img: `${BASE_URL}/etq-black-1.jpg`,
    desc: 'Handmade in Portugal from premium nappa leather. Full calf-skin lining. Getcha grown-up on.',
    featured_images: [
      `${BASE_URL}/etq-black-1.jpg`,
      `${BASE_URL}/etq-alloy.jpg`,
      `${BASE_URL}/etq-black-highs.jpg`
    ]
  },
    {
    name: 'ETQ MT 01 Alloy',
    price: 120,
    img: `${BASE_URL}/etq-alloy.jpg`,
    desc: 'LT 01 (low top 1) is a luxurious interpretation of the classic tennis sneaker, featuring a premium nubuck leather upper, a layered leather insole, nubuck toecap, metal eyelets, and nylon laces.',
    featured_images: [
      `${BASE_URL}/etq-alloy.jpg`,
      `${BASE_URL}/etq-grey.jpg`,
      `${BASE_URL}/etq-cement.jpg`,
    ]
  },
  {
    name: 'ETQ LT 01 Brown',
    price: 160,
    img: `${BASE_URL}/etq-brown.jpg`,
    desc: 'MT 02 (mid top 2) is a luxurious interpretation of 1980s basketball silhouettes, featuring a premium nubuck leather upper, a layered leather insole, leather toecap, and nylon laces. Outsole is made from natural rubber, featuring a custom-made rugged profile for extra grip.',
    featured_images: [
      `${BASE_URL}/etq-brown.jpg`,
      `${BASE_URL}/etq-fig.jpg`,
      `${BASE_URL}/etq-dove.jpg`,
    ]
  },
  {
    name: 'ETQ LT 01 Whites',
    price: 110,
    img: `${BASE_URL}/etq-white.jpg`,
    desc: 'LT 01 (low top 1) is a luxurious interpretation of the classic tennis sneaker, featuring a premium nappa leather upper, a layered leather insole, leather toecap, metal eyelets, and nylon laces.',
    featured_images: [
      `${BASE_URL}/etq-white.jpg`,
      `${BASE_URL}/etq-knitted-white.jpg`,
      `${BASE_URL}/etq-dove.jpg`,
    ]
  },
  {
    name: 'ETQ LT 01 Cement',
    price: 110,
    img: `${BASE_URL}/etq-cement.jpg`,
    desc: 'This style is part of 36 Shades, a special collection to celebrate our ten year anniversary. 36 refers to our first order: 36 luxury tennis sneakers in crisp white nappa to sell to friends and family. Now, to celebrate the journey we’ve had since then, we offer 36 colours of our first silhouette in nappa, suede and nubuck leather. This one is handmade in Portugal from premium suede. It’s hand-sanded to create a velvet effect. It features an anti-bacterial micro-fibre lining, layered foam insoles and TPU outsoles.',
    featured_images: [
      `${BASE_URL}/etq-cement.jpg`,
      `${BASE_URL}/etq-dove.jpg`,
      `${BASE_URL}/etq-grey.jpg`,
    ]
  },
  {
    name: 'ETQ MT 01 Dove',
    price: 110,
    img: `${BASE_URL}/etq-dove.jpg`,
    desc: 'The Dove LT 01 (low top 1) is a luxurious interpretation of the classic tennis sneaker, featuring a premium nappa leather upper, a layered leather insole, leather toecap, metal eyelets, and nylon laces.',
    featured_images: [
      `${BASE_URL}/etq-dove.jpg`,
      `${BASE_URL}/etq-sand.jpg`,
      `${BASE_URL}/etq-fig.jpg`,
    ]
  },
  {
    name: 'ETQ LT 01 Azure',
    price: 110,
    img: `${BASE_URL}/etq-azure.jpg`,
    desc: 'LT 01 (low top 1) is a luxurious interpretation of the classic tennis sneaker, featuring a premium nappa leather upper, a layered leather insole, leather toecap, metal eyelets, and nylon laces.',
    featured_images: [
      `${BASE_URL}/etq-azure.jpg`,
      `${BASE_URL}/etq-green.jpg`,
      `${BASE_URL}/etq-grey.jpg`,
    ]
  },
  {
    name: 'ETQ MT 01 Black',
    price: 110,
    img: `${BASE_URL}/etq-black-highs.jpg`,
    desc: 'LT 01 (low top 1) is a luxurious interpretation of the classic tennis sneaker, featuring a premium nappa leather upper, a layered leather insole, leather toecap, metal eyelets, and nylon laces.',
    featured_images: [
      `${BASE_URL}/etq-black-highs.jpg`,
      `${BASE_URL}/etq-highs-blueberry.jpg`,
    ]
  },
];

function HomeScreen({navigation}) {
  return (
    <FadeInView
      style={{ backgroundColor: '#fff', paddingBottom: 100}}
      duration={800}
    >
    <AppHeader/>
    <ScrollView>
      <Banner
        image={bannerImage}
        imageOpacity={0.7}
        title={'ETQ Amsterdam'}
        />
      <FilterBar />
      <Heading title={'Best Sellers'}/>
      <View style={styles.row}>
      {
        products.map((product, index) => {
          return(
            <View  style={styles.col} key={index}>
              <ProductCard product={product} navigation={navigation}/>
            </View>
          )
        })
      }
      </View>
      <AppFooter />
    </ScrollView>
    </FadeInView>
  );
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    width: "100%",
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    paddingVertical: theme.SPACING_LG,
    paddingHorizontal: theme.PADDING_GRID / 2,
    backgroundColor: theme.COLOR_SOFT_BG,
  },
  col: {
    flexBasis: '50%',
    padding: 5
  },
});

export default HomeScreen;
