export default {
  template: await fetch('./templates/blog.html').then(res => res.text()),
  props: ['id'],
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "Cuisine (and its symbolism)",
          author: "DY CHUA, Lance",
          content: `
            <p>Tsinoy cuisine often consists of many traditional Chinese dishes which are eaten during occasions like Chinese New Year. Although Chinese cuisine seems simple, each dish has its own symbolism for each occasion.</p>
            
            <h4 class="text-white">Historical Background & Today's Adaptation</h4>
            <p>When many Chinese families migrated to the Philippines, they integrated some of their dishes with some modifications. One example of this is Lumpiang Shanghai, a classic Filipino dish; its etymology is of Hokkien origin however the dish was mainly developed in the Philippines after Chinese spring rolls mixed with Hispanic and Filipino styles of cooking based on the ingredients available in the Philippines.</p>
            <p>Flavor fusion is a common theme in the Chinese community where Chinese dishes have small modifications to match the local taste. A popular example of this is 'hopia' cake, a Chinese sweet dish traditionally filled with bean mongo, but can also be found with ube filling in Chinoy cuisine. Another example is fried siopao, a fried twist on the chinese traditional steam bun.</p>
            <p>During celebrations like Chinese New Year, the family reunion dinner has a specific selection of Chinese or Chinoy food because they each have their own symbolism and meaning. Dumplings resemble ancient ingots symbolizing wealth and prosperity and longevity noodles are eaten uncut to ensure a long, healthy life. A classic dessert dish is Tangyuan, a sweet dessert made from glutinous rice to represent family unity.</p>
            <img src="https://images.chinahighlights.com/allpicture/2018/03/840e912f8b7c47aca7eb0b0e.jpg" alt="symbolismses" class="my-5 rounded justify-center items-center" width="100%">
            
            <h4 class="text-white">Common Misunderstandings</h4>
            <ul>
              <li><strong>Chinese or Chinoys eat dogs, bats, or any other exotic animals:</strong> Although some Chinese cultures have this practice, Chinoys primarily descend from the Hokkien speaking Fujian province of China where the traditional cuisine is heavily based on seafood like oyster cakes which is still eaten by Chinoys in the Philippines.</li>
              <li><strong>Chinoy food is just a ripoff of Chinese cuisine/just Chinese cuisine served in the Philippines:</strong> Chinoy food is an adaptation of Chinese food in many ways. Given the warmer tropical climate and different available ingredients, certain key elements like the filling in a bun or a method of cooking is swapped to adapt to the local taste.</li>
            </ul>

            <h4 class="text-white">Importance and Significance</h4>
            <p>Chinoy food is a celebration of the mix of two distinct cultures and shows that the two can coexist in harmony. The Philippines as a whole owes a lot to Chinoy cuisine and Chinoy chefs for the international presence of Filipino and Chinoy cuisine.</p>

            <blockquote class="reflection">
              <strong>Reflection:</strong> Maintaining a good relationship with one's heritage helps ground one's identity which is especially relevant today where metropolitan areas are diversifying rapidly. This strong sense of heritage helps build trust and confidence that one can build bridges with others from another community. Understanding history and context also helps one understand others beliefs and actions.
            </blockquote>
          `
        },
        {
          id: 2,
          title: "Business and Labor Ethic",
          author: "Tam, Kian",
          content: `
            <p>The Filipino-Chinese community's business and labor ethic emphasizes virtues like hard work, discipline, thrift, and family cooperation. Many Filchi enterprises are established by parents and children who work together to manage a company or store. This collaboration among members of the family emphasizes honesty, long term relations with suppliers and customers, and preservation of wealth for future needs. Working together as a family brings about endurance and responsibility that help the community.</p>
            
            <h4 class="text-white">Historical Background & Today's Adaptation</h4>
            <p>This practice began when early Chinese migrants migrated to the Philippines primarily for commerce and business. As these people were distant from their homes, they relied on hard work and family support to live and thrive. These practices were then passed down from one generation to the next. The blend of Chinese principles and Filipino culture influenced the strong work ethic that exists today.</p>
            <p>Today, the Filipino-Chinese work ethic is evident not only in modest family stores but also in large corporations and industries. Many Filchi entrepreneurs today employ technology, social media, and modern management techniques. They also maintain traditional values such as dedication, respect for elders, and a devotion to producing high-quality work. The tradition has evolved to reflect modern times while maintaining core beliefs.</p>
            
            <h4 class="text-white">Common Misunderstandings</h4>
            <ul>
              <li><strong>Wealth and Motivation:</strong> One widespread misconception is that Filchi are wealthy or solely focused on money. This belief may stem from witnessing successful Filchi businesses.</li>
              <li><strong>Strictness and Personality:</strong> Another misconception is that they are overly strict or unemotional which could stem from their serious approach to work. These notions are incorrect because success is often the result of years of hard work, effort, discipline, and cooperation rather than riches or personality.</li>
            </ul>

            <h4 class="text-white">Importance and Significance</h4>
            <p>This custom is significant because it instills the values of hard work, patience, and responsibility. It also demonstrates how cultural values can help a community prosper despite adversity. Continuing this legacy helps future generations develop solid work and business habits. It also benefits the Philippine economy and fosters cross-cultural understanding.</p>

            <blockquote class="reflection">
              <strong>Reflection:</strong> Maintaining a positive relationship with our cultural history is essential because it allows us to understand who we are and where we came from. In a diverse society, cultural traditions help us make good decisions and respect others. The Filchi work ethic instills ideals that are applicable not only in business but also in everyday life. Preserving our heritage teaches us to respect both our own and other people's cultures. This helps to create a more respectful and cohesive society.
            </blockquote>
          `
        },
        {
          id: 3,
          title: "The Hokkien Language (Lang-nang-oe)",
          author: "TALAMAYAN, SEAN",
          content: `
            <p>The Hokkien language is an integral verbal practice to the Filipino-Chinese community of the Philippines. Lang-nang-oe(咱人話) is a distinct form of Hokkien born to the Filipino-Chinese community of Fujian descent that combines Tagalog, English and Hokkien and is spoken around. It is the face of this distinct community's identity and symbolizes the community spirit, cultural heritage, as well as the survival of the Chinese-Filipino legacy.</p>
            
            <h4 class="text-white">Historical Background & Today's Adaptation</h4>
            <p>Majority of the Filipino-Chinese have roots in the Chinese province of Fujian (福建), where Hokkien originated as a southern dialect of the Min language. This dialect was later on brought to the Philippines via trade between China and the Philippines, and Chinese Migrants (from Guangdong and Fujian) during the 19-20th centuries.</p>
            <p>In modern-day Philippine society, Hokkien has evolved to become Lang-nang-oe, and is typically a mix between Tagalog, English and Hokkien. It is practiced typically in social circles, homes and business contexts. In homes and social circles specifically, terms such as "Ahya" and "Achi" are used to refer to siblings or people with relations to the speaker. Moreover, the Hokkien language has been integrated into the Philippine vocabulary, with words such as "susi" and "miswa" having their roots in Hokkien.</p>
            
            <h4 class="text-white">Common Misunderstandings</h4>
            <ul>
              <li><strong>Old-fashioned and outdated:</strong> Using this language seems to be less important in the current period of globalization. It has been seeing a decline in recent Chinese-Filipinos due to the language being taught less as compared to other languages such as English and Mandarin.</li>
              <li><strong>Inferior to Mandarin:</strong> Hokkien is seen as inferior to Mandarin as governments of Chinese-speaking nations have been actively promoting Mandarin as the main Sinitic language in formal settings.</li>
              <li><strong>Just another dialect of Mandarin:</strong> Hokkien doesn't have a writing system that fully caters to its unique aspects - it shares the same Chinese Characters typically associated with Mandarin.</li>
              <li><strong>Spoken by all Chinese-Filipinos:</strong> There are still some populations living in the Philippines who are of Cantonese or Mandarin descent.</li>
            </ul>

            <h4 class="text-white">Importance and Significance</h4>
            <p>Hokkien is essential to Philippine society as it has contributed greatly to the development of the modern Tagalog vocabulary, Filipino culture and economy. Words such as "suki" and "pancit" stem from this language, leaving a mark on culture and business through "suki" relationships and food becoming key parts in Philippine culture.</p>

            <blockquote class="reflection">
              <strong>Reflection:</strong> In a society majorly affected by globalization, it is important that we as Chinese-Filipinos maintain connection to our culture, by acknowledging the importance of the Hokkien language and making consistent efforts to use the said language. Today's Fujian descent Chinese-Filipino youth are at risk of forgetting how to speak Hokkien, with limited resources and with the increase in communication through Mandarin, English and Tagalog. Appreciating one's roots allows for a better understanding of the self and a greater feeling of belongingness. The Hokkien language acts as a catalyst to this appreciation and keeping in touch with our roots.
            </blockquote>
          `
        },
        {
          id: 4,
          title: "Chinese New Year",
          author: "Go, Steve",
          content: `
            <p>Chinese New Year. It is a celebration where families gather, eat together, and do traditions to bring good luck and prosperity.</p>
            
            <h4 class="text-white">Historical Background & Today's Adaptation</h4>
            <p>It started in ancient China as a way to welcome a new year and honor family, ancestors, and good fortune. Today, Chinese-Filipinos celebrate it with family dinners, red envelopes, prayers, and sometimes public events.</p>
            
            <h4 class="text-white">Common Misunderstandings</h4>
            <p>Some people think it's just about money or fireworks, but it's really about family and tradition.</p>

            <h4 class="text-white">Importance and Significance</h4>
            <p>This tradition is important because it keeps Chinese-Filipino culture alive and strengthens family bonds.</p>

            <blockquote class="reflection">
              <strong>Reflection:</strong> Maintaining a good relationship with my cultural heritage is important because it helps me understand who I am and my roots. In a society that is becoming more diverse, knowing my roots gives me a sense of identity. It also helps me respect and appreciate other cultures because I understand the value of traditions and history. By keeping my cultural heritage alive, I can connect with others while still staying true to myself.
            </blockquote>
          `
        },
        {
          id: 5,
          title: "Filial Piety and Family Bonds",
          author: "Tio, Colin",
          content: `
            <p>Filial piety and family bonds. This tradition can include huge family gatherings during special occasions like Chinese New Year, Christmas, etc. It also means showing respect to our elders through small gestures like helping with chores, seeking counsel during decisions from them during important decisions like career or marriage are all part of family bonds. In the community, it symbolizes a fusion of Chinese and Filipino practices in family with Confucianism and Filipino traditions.</p>
            
            <h4 class="text-white">Historical Background & Today's Adaptation</h4>
            <p>This practice originated with and is based on the Chinese belief of Confucianism, which was created around 6-5 BCE ago and taught the youth to obey, respect and forever care for their parents. On the Filipino side, many traits of modern Chinese-Filipino families like the gesture and saying "Mano po" which is used to show respect to your elders and "Utang ng loob" which asks that children give back to their parents for their sacrifices.</p>
            <p>Today, these practices continue forth as many Chinese Filipinos still continue to follow these Filipino practices and the Chinese values of Confucius today. Although people today are more individualistic today as compared to before due to Western influences and family approval is less of an absolute and more of an approval.</p>
            
            <h4 class="text-white">Common Misunderstandings</h4>
            <ul>
              <li><strong>Forced Decisions:</strong> People assume Chinoy children are forced to follow every decision. Though children are taught to obey their parents, they do not have to blindly follow. They are able to politely give alternatives or refuse. Disagreeing is allowed when expressed respectfully.</li>
              <li><strong>Authoritarianism:</strong> Filial Piety is authoritarian and controlling for children. No. In Fil-Chi culture, Filial Piety means caring and showing gratitude to our elders by helping them with tasks, taking them to the hospital, etc. Filial Piety does not imply control whatsoever.</li>
              <li><strong>Ancestral Rituals:</strong> Ancestral Rituals are only religious and outdated. Ancestral Rituals are not just simply for religion. Ancestral Rites show respect to those who have gone ahead of us, and it can be compared to visiting a loved one's grave.</li>
            </ul>

            <h4 class="text-white">Importance and Significance</h4>
            <p>This tradition is essential for the next generation to continue because it helps us remember and show respect to our family. This is important because we should cherish our parents while they are still with us and because who we become starts at home.</p>

            <blockquote class="reflection">
              <strong>Reflection:</strong> It is important to maintain a good relationship with our cultural heritage because it is what we are made of. When we have a bad relationship with our heritage, we become distant with the world, as we lose our core values, making us become confused about our identity as our base collapses. While on the other hand, when we have a good relation to our cultural heritage we can find and strengthen our identity. It also serves as a source of wisdom through discovering our history and using it to evolve.
            </blockquote>
          `
        }
      ]
    };
  },
  computed: {
    currentPost() {
      return this.posts.find(post => post.id == this.id);
    }
  },
  mounted() {
    Vue.nextTick(() => {
      if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 800, offset: 100 });
      }
    });
  }
};