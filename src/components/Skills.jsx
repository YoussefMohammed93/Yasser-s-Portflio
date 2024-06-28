import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import ContentCreationImg from "/src/assets/ContentCreation.png";
import TutoringImg from "/src/assets/Tutoring.png";
import VideoEditingImg from "/src/assets/Video-Editing.png";
import ResearchingImg from "/src/assets/Researching.png";
import ScriptWritingImg from "/src/assets/Scriptwriting.png";
import TranscriptionImg from "/src/assets/Transcription.png";
import PhotoshopImg from "/src/assets/Photoshop.png";
import VoiceoverImg from "/src/assets/Voiceover.png";
import SoundDesignImg from "/src/assets/SoundDesign.png";
import TranslationImg from "/src/assets/Translation.png";
import MotionGraphicsImg from "/src/assets/MotionGraphics.png";
import AnimationImg from "/src/assets/Animation.png";

const skills = [
  { name: "Content Creation", image: ContentCreationImg },
  { name: "Tutoring", image: TutoringImg },
  { name: "Video Editing", image: VideoEditingImg },
  { name: "Researching", image: ResearchingImg },
  { name: "Script Writing", image: ScriptWritingImg },
  { name: "Transcription", image: TranscriptionImg },
  { name: "Photoshop", image: PhotoshopImg },
  { name: "Voiceover", image: VoiceoverImg },
  { name: "Sound Design", image: SoundDesignImg },
  { name: "Translation", image: TranslationImg },
  { name: "Motion Graphics", image: MotionGraphicsImg },
  { name: "Animation", image: AnimationImg },
];

const SkillsSection = () => {
  return (
    <section
      className="skills-section bg-[var(--bg-second)] relative z-20"
      id="skills"
    >
      <div className="section-container">
        <div>
          <div className="text-center pt-8">
            <h1 className="main-title text-3xl sm:text-5xl font-black text-[var(--text-color)] uppercase">
              My Skills
            </h1>
          </div>
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            className="cursor-pointer pb-16 pt-2"
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation
            modules={[Navigation, Pagination, Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1537: {
                slidesPerView: 5,
              },
            }}
          >
            {skills.map((skill, index) => (
              <SwiperSlide key={index} className="mt-0 sm:mt-6 mb-6">
                <div className="skills-card flex flex-col items-center gap-5 my-8">
                  <div>
                    <img
                      src={skill.image}
                      alt={skill.name}
                      width="100px"
                      height="100px"
                    />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--text-color)]">
                      {skill.name}
                    </h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
