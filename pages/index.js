import React from 'react';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Image
} from '@chakra-ui/core';

import Timeline from '../components/Timeline';
import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import Subscribe from '../components/Subscribe';
import ProjectCard from '../components/ProjectCard';

import { frontMatter as kapitangMassalanra } from './blog/kapitang-massalanra-panglima-perang-datu-lowa.mdx';

const Index = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <Container>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            Kurniawan Alcantara
          </Heading>
          <Text color={secondaryTextColor[colorMode]}>
            Saya seorang pengembang aplikasi web, penulis dan pegiat dunia
            literasi. Untuk saat ini masih dalam proses merampungkan studi di
            Fakultas Keguruan di IAI As'adiyah Sengkang. Jadi, disini adalah
            tempatku mempublikasikan semua tulisanku baik artikel atau opini.
            Topiknya bermacam-macam seperti teknologi, dunia kampus, dan
            terkadang juga opini saya terhadap peristiwa terkini.
          </Text>
          <Image
            alignItems="center"
            alt="Me"
            height="512px"
            width="700px"
            borderRadius={8}
            p={8}
            src="https://firebasestorage.googleapis.com/v0/b/kurnhy-blog.appspot.com/o/1.jpg?alt=media&token=2d4406d8-a304-4e66-98fb-14c4eea40890"
          />
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          mt={8}
        >
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
            Tulisan populer
          </Heading>
          <BlogPost {...kapitangMassalanra} />
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
            Proyek
          </Heading>
          <ProjectCard
            title="Blog Pribadi dengan NextJS"
            description="Membangun blog ini dengan kerangka dasar NextJS, dengan dukungan Chakra UI dan MDX "
            href="/"
            icon="check"
          />
          <ProjectCard
            title="HMI As'adiyah Web App"
            description="Membangun web app dimulai dari scratch (ground) dengan full feature untuk keperluan humas organisasi. 
            Salah satu pengalaman yang berharga buatku"
            href="https://hmi-asadiyah.web.app/"
            icon="check"
          />
          <ProjectCard
            title="Bugismart App"
            description="Saya rasa ini adalah pengalaman pertamaku dalam hal Android App Development, ini belum selesai sejak 2 tahun lalu
            dan tidak akan pernah selesai :v terkendala support finansial"
            href=""
            icon="x"
          />
        </Flex>
        <Timeline />
        <Subscribe />
      </Stack>
    </Container>
  );
};

export default Index;
