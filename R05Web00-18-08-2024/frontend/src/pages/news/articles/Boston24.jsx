import React from 'react';
import { Helmet } from 'react-helmet';
import image68 from '../../../assets/images/bostonLogo.jpeg';
import image69 from '../../../assets/images/bostonwinner.jpeg';
import image70 from '../../../assets/images/faisal.jpeg';
import image71 from '../../../assets/images/salman.jpg';
import image72 from '../../../assets/images/hamid.jpeg';
import image73 from '../../../assets/images/bostonGroup.jpeg';
import image73A from '../../../assets/images/bostonGroup2.jpeg';
import image73B from '../../../assets/images/bostonGroup3.jpg';
import { FacebookShareButton, WhatsappShareButton, FacebookIcon, WhatsappIcon } from 'react-share';

const ShareButtons = ({ url, title }) => {
  return (
    <div className="flex justify-center space-x-4 mt-4">
      <FacebookShareButton url={url} quote={title}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <WhatsappShareButton url={url} title={title}>
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
    </div>
  );
};


const BostonMarathon2024 = () => {
  const pageUrl = "https://www.runpakistan.com/boston-marathon-2024";
  const pageTitle = "Boston Marathon 2024 & Pakistani Runners";  

  return ( 
            <>
              <Helmet>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Boston Marathon 2024 & Pakistani Runners</title>
                <meta
                  name="description"
                  content="Read about the inspiring journey of Pakistani runners at the Boston Marathon 2024, where they showcased remarkable courage and determination alongside elite athletes from around the world. Discover the triumphs of individuals like Hamza Syed, Saqid Shah, and Faisal Shafi, who defied challenges to cross the finish line, leaving a lasting impact on the historic race."
                />
                <meta
                  name="keywords"
                  content="Boston Marathon 2024, Pakistani runners, Hamza Syed, Saqid Shah, Faisal Shafi, Boston Marathon achievements, Boston Marathon diversity, marathon camaraderie, human spirit, endurance, Pakistani athletes, marathon inspiration"
                />
                <meta name="robots" content="index, follow" />
                <link
                  rel="canonical"
                  href="https://www.runpakistan.com/boston-marathon-2024"
                />
                <meta property="og:image" content={image73A} /> 

                <meta name="author" content="runPAKISTAN" />
              </Helmet>

              <div className="container md:ml-10 px-2 py-8 mt-2 flex flex-wrap">
                <div className="max-w-3xl flex flex-col sm:mt-20">
                <div className="flex flex-wrap justify-center mb-8">
                        <div className="max-w-xs mx-auto mb-4">
                          <img
                            src={image73}
                            alt="Pakistani Runners at Boston 2024"
                            className="rounded-md"
                          />
                        </div>
                        <div className="max-w-xs mx-2 mb-4">
                          <img
                          src={image73B}
                          alt="Pakistani Runners at Boston 2024"
                          className="rounded-md"
                          />                           
                        </div>
                        <p className="text-center text-gray-600 mt-2">
                          Pakistani Runners at 128th Boston Marathon
                          </p>
                      </div>
                    <h1 className="text-3xl text-center font-bold mb-4 text-green-800">
                      Strides of Pride: Boston Marathon 2024 & Pakistani Runners
                    </h1>
                    <ShareButtons url={pageUrl} title={pageTitle} />        
                    <p class="mb-4 mt-5">The Boston Marathon, one of the most prestigious events in the running world, unfolded its 2024 edition with unparalleled fervor and excitement. From elite athletes to amateur runners, Over 30,000 runners from 118 countries gathered to test their limits on the historic course, showcasing the epitome of human endurance and spirit.</p>
                    {/* Image gallery */}
                    <div className="flex flex-wrap justify-center mb-8">
                        <div className="max-w-xs mx-auto mb-4">
                          <img
                            src={image68}
                            alt="Boston Marathon Logo"
                            className="rounded-md"
                            style={{ height: '200px' }}
                          />
                          <p className="text-center text-gray-600 mt-2">
                            128th Boston Marathon
                          </p>
                        </div>
                        <div className="max-w-xs mx-2 mb-4">
                          <img
                          src={image69}
                          alt="Winner at Boston Marathon 2024"
                          className="rounded-md"
                          style={{ height: '200px' }}
                          /> 
                          <p className="text-center text-gray-600 mt-2">
                            Winner at Boston Marathon 2024
                          </p>
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold mb-2 text-green-800">Men's Race:</h2>
                      <p className="mb-4">In the men's category, it was a fierce battle for the top spot. Sisay Lemma from Ethiopia emerged victorious with an impressive time of 2 hours, 6 minutes, and 17 second.</p>
                      <p className="mb-4">In a display of sheer athleticism and determination, Sisay Lemma clinched victory in the men's division, crossing the finish line with a dominating performance, clocking an impressive time of 2:06:17. Representing Ethiopia, Lemma's triumph resonated throughout the running community, setting a new standard for excellence in marathon running. Mohamed Esa and Evans Chebet secured the second and third positions respectively, adding to the thrilling competition on the streets of Boston.</p>
                      <div className="overflow-x-auto mt-8">
                        <table className="table-auto w-full border-collapse">
                          <thead>
                            <tr className="bg-gray-200">
                              <th className="px-4 py-2 hidden md:table-cell">Place</th>
                              <th className="px-4 py-2">Athlete</th>
                              <th className="px-4 py-2">Nationality</th>
                              <th className="px-4 py-2">Time</th>
                            </tr>
                          </thead>
                          <tbody className="text-center">
                            <tr>
                              <td className="border px-4 py-2 hidden md:table-cell">1</td>
                              <td className="border px-4 py-2">Sisay Lemma</td>
                              <td className="border px-4 py-2">Ethiopia</td>
                              <td className="border px-4 py-2">2:06:17</td>
                            </tr>
                            <tr>
                              <td className="border px-4 py-2 hidden md:table-cell">2</td>
                              <td className="border px-4 py-2">Mohamed Esa</td>
                              <td className="border px-4 py-2">Ethiopia</td>
                              <td className="border px-4 py-2">2:06:58</td>
                            </tr>
                            <tr>
                              <td className="border px-4 py-2 hidden md:table-cell">3</td>
                              <td className="border px-4 py-2">Evans Chebet</td>
                              <td className="border px-4 py-2">Kenya</td>
                              <td className="border px-4 py-2">2:07:22</td>
                            </tr>
                            <tr>
                              <td className="border px-4 py-2 hidden md:table-cell">4</td>
                              <td className="border px-4 py-2">John Korir</td>
                              <td className="border px-4 py-2">Kenya</td>
                              <td className="border px-4 py-2">2:07:40</td>
                            </tr>
                            <tr>
                              <td className="border px-4 py-2 hidden md:table-cell">5</td>
                              <td className="border px-4 py-2">Albert Korir</td>
                              <td className="border px-4 py-2">Kenya</td>
                              <td className="border px-4 py-2">2:07:47</td>
                            </tr>
                            <tr>
                              <td className="border px-4 py-2 hidden md:table-cell">6</td>
                              <td className="border px-4 py-2">Isaac Mpofu</td>
                              <td className="border px-4 py-2">Zimbabwe</td>
                              <td className="border px-4 py-2">2:08:17</td>
                            </tr>
                            <tr>
                              <td className="border px-4 py-2 hidden md:table-cell">7</td>
                              <td className="border px-4 py-2">CJ Albertson</td>
                              <td className="border px-4 py-2">United States</td>
                              <td className="border px-4 py-2">2:09:53</td>
                            </tr>
                            <tr>
                              <td className="border px-4 py-2 hidden md:table-cell">8</td>
                              <td className="border px-4 py-2">Yuma Morii</td>
                              <td className="border px-4 py-2">Japan</td>
                              <td className="border px-4 py-2">2:09:59</td>
                            </tr>
                            <tr>
                              <td className="border px-4 py-2 hidden md:table-cell">9</td>
                              <td className="border px-4 py-2">Cyprian Kimurgor Kotut</td>
                              <td className="border px-4 py-2">Kenya</td>
                              <td className="border px-4 py-2">2:10:29</td>
                            </tr>
                            <tr>
                              <td className="border px-4 py-2 hidden md:table-cell">10</td>
                              <td className="border px-4 py-2">Zouhair Talbi</td>
                              <td className="border px-4 py-2">Morocco</td>
                              <td className="border px-4 py-2">2:10:45</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <h2 className="text-2xl font-bold mb-2 mt-8 text-green-800">Women's Race:</h2>
                      <p className="mb-4">In the women's category, it was a fierce battle for the top spot. Hellen Obiri from Kenya emerged victorious with an impressive time of 2 hours, 22 minutes, and 37 second, </p>
                      <p className="mb-4">Meanwhile, in the women's category, Hellen Obiri stole the spotlight with a spectacular performance, clinching her victory with a total time of 2:22:37. The Kenyan athlete exhibited unparalleled skill and determination, reaffirming her status as one of the finest marathon runners of her generation. Sharon Lokedi and Edna Kiplagat followed closely behind, rounding off the top three positions with exemplary displays of athleticism and grit.</p>
                      <div className="overflow-x-auto mt-8">
                        <table className="table-auto w-full border-collapse">
                          <thead>
                          <tr className="bg-gray-200">
                              <th className="px-4 py-2 hidden md:table-cell">Place</th>
                              <th className="px-4 py-2">Athlete</th>
                              <th className="px-4 py-2">Nationality</th>
                              <th className="px-4 py-2">Time</th>
                          </tr>
                          </thead>
                          <tbody className="text-center">
                          <tr>
                              <td className="border px-4 py-2 hidden md:table-cell">1</td>
                              <td className="border px-4 py-2">Hellen Obiri</td>
                              <td className="border px-4 py-2">Kenya</td>
                              <td className="border px-4 py-2">2:22:37</td>
                          </tr>
                          <tr>
                              <td className="border px-4 py-2 hidden md:table-cell">2</td>
                              <td className="border px-4 py-2">Sharon Lokedi</td>
                              <td className="border px-4 py-2">Kenya</td>
                              <td className="border px-4 py-2">2:22:45</td>
                          </tr>
                          <tr>
                              <td className="border px-4 py-2 hidden md:table-cell">3</td>
                              <td className="border px-4 py-2">Edna Kiplagat</td>
                              <td className="border px-4 py-2">Kenya</td>
                              <td className="border px-4 py-2">2:23:21</td>
                          </tr>
                          <tr>
                              <td className="border px-4 py-2 hidden md:table-cell">4</td>
                              <td className="border px-4 py-2">Buze Diriba</td>
                              <td className="border px-4 py-2">Ethiopia</td>
                              <td className="border px-4 py-2">2:24:04</td>
                          </tr>
                          <tr>
                              <td className="border px-4 py-2 hidden md:table-cell">5</td>
                              <td className="border px-4 py-2">Senbere Teferi</td>
                              <td className="border px-4 py-2">Ethiopia</td>
                              <td className="border px-4 py-2">2:24:04</td>
                          </tr>
                          <tr>
                              <td className="border px-4 py-2 hidden md:table-cell">6</td>
                              <td className="border px-4 py-2">Mary Ngugi</td>
                              <td className="border px-4 py-2">Kenya</td>
                              <td className="border px-4 py-2">2:24:24</td>
                          </tr>
                          <tr>
                              <td className="border px-4 py-2 hidden md:table-cell">7</td>
                              <td className="border px-4 py-2">Workenesh Edesa</td>
                              <td className="border px-4 py-2">Ethiopia</td>
                              <td className="border px-4 py-2">2:24:47</td>
                          </tr>
                          <tr>
                              <td className="border px-4 py-2 hidden md:table-cell">8</td>
                              <td className="border px-4 py-2">Fatima Ezzahra Gardadi</td>
                              <td className="border px-4 py-2">Morocco</td>
                              <td className="border px-4 py-2">2:24:53</td>
                          </tr>
                          <tr>
                              <td className="border px-4 py-2 hidden md:table-cell">9</td>
                              <td className="border px-4 py-2">Tiruye Mesfin</td>
                              <td className="border px-4 py-2">Ethiopia</td>
                              <td className="border px-4 py-2">2:24:58</td>
                          </tr>
                          <tr>
                              <td className="border px-4 py-2 hidden md:table-cell">10</td>
                              <td className="border px-4 py-2">Dera Dida</td>
                              <td className="border px-4 py-2">Ethiopia</td>
                              <td className="border px-4 py-2">2:25:16</td>
                          </tr>
                          </tbody>
                      </table>
                      </div>
                      <h2 className="text-2xl font-bold mb-2 mt-8 text-green-800">Pakistani Runners:</h2>
                      <p className="mb-4">Amidst the competitive field, a group of ten resilient runners from Pakistan added a touch of diversity and inspiration to the Boston Marathon. Despite facing various challenges, these athletes showcased remarkable courage and determination, embodying the true spirit of the marathon.</p>
                        <div className="flex flex-wrap justify-center mb-8">
                          <div className="max-w-xs mx-auto mb-4">
                              <img src={image70} alt="Jasmine Paris at Barkley Marathon" className="rounded-md" style={{ height: '450px', width: '400px' }}></img>
                                  <p className="text-center text-gray-600 mt-2">Faisal Shafi 6 star finisher</p>
                          </div>
                          <div className="max-w-xs mx-2 mb-4">
                              <img src={image71} alt="Jasmine Paris at Barkley Marathon" className="rounded-md" style={{ height: '450px', width: '400px' }}></img>
                              <p className="text-center text-gray-600 mt-2">Salman Khan at Boston</p>
                          </div>
                      </div>
                      <div className="max-w-2xl mx-auto flex flex-col">
                          <article className="blog-post">
                            <p className="mb-4">Hamza Syed, with a commendable time of 2:43, led the Pakistani contingent, followed by Saqid Shah at 2:57, and Faisal Shafi at 3:16. Anjum Basherri, Dr. Salman, and veteran Boston runner Hamid Butt demonstrated unwavering resolve, crossing the finish line with times of 3:20, 3:23, and 3:53 respectively.</p>
                            <p className="mb-4">Huma Rehman, Ayesha Akhtar, Huma Imtiaz, and Sahar Halim showcased extraordinary perseverance and determination, completing the marathon with times of 3:57, 4:26, 4:53, and 6:30 respectively.</p>
                            <div className="flex flex-wrap justify-center mb-8">
                              <div className="max-w-xs mx-auto mb-4">
                                <img src={image72} alt="Hamid" className="rounded-md" style={{ height: '450px', width: '400px' }}></img>
                                <p className="text-center text-gray-600 mt-2">Veteran Runner Hamid Butt</p>
                              </div>
                              <div className="max-w-xs mx-2 mb-4">
                                <img src={image73A} alt="Jasmine Paris at Barkley Marathon" className="rounded-md" style={{ height: '450px', width: '400px' }}></img>
                                <p className="text-center text-gray-600 mt-2">Pakistani Group</p>
                              </div>
                            </div>
                            <div className="container justify-center">
                            <div className="overflow-x-auto text-center mt-8">
                                <table className="table-auto w-full border-collapse border-gray-400">
                                  <thead>
                                    <tr>
                                      <th className="px-4 py-2 bg-gray-200 border border-gray-400">Runner</th>
                                      <th className="px-4 py-2 bg-gray-200 border border-gray-400">Finish Time</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td className="px-4 py-2 border border-gray-400">Hamza Syed</td>
                                      <td className="px-4 py-2 border border-gray-400">2:43:21</td>
                                    </tr>
                                    <tr>
                                      <td className="px-4 py-2 border border-gray-400">Sadiq Shah</td>
                                      <td className="px-4 py-2 border border-gray-400">2:57:05</td>
                                    </tr>
                                    <tr>
                                      <td className="px-4 py-2 border border-gray-400">Faisal Shafi</td>
                                      <td className="px-4 py-2 border border-gray-400">3:16:50</td>
                                    </tr>
                                    <tr>
                                      <td className="px-4 py-2 border border-gray-400">Anjum Basherri</td>
                                      <td className="px-4 py-2 border border-gray-400">3:20:25</td>
                                    </tr>
                                    <tr>
                                      <td className="px-4 py-2 border border-gray-400">Dr Salman Khan</td>
                                      <td className="px-4 py-2 border border-gray-400">3:23:11</td>
                                    </tr>
                                    <tr>
                                      <td className="px-4 py-2 border border-gray-400">Hamid Butt</td>
                                      <td className="px-4 py-2 border border-gray-400">3:53:12</td>
                                    </tr>
                                    <tr>
                                      <td className="px-4 py-2 border border-gray-400">Huma Rehman</td>
                                      <td className="px-4 py-2 border border-gray-400">3:57:52</td>
                                    </tr>
                                    <tr>
                                      <td className="px-4 py-2 border border-gray-400">Ayesha Akhtar</td>
                                      <td className="px-4 py-2 border border-gray-400">4:26:13</td>
                                    </tr>
                                    <tr>
                                      <td className="px-4 py-2 border border-gray-400">Huma Imtiaz</td>
                                      <td className="px-4 py-2 border border-gray-400">4:53:12</td>
                                    </tr>
                                    <tr>
                                      <td className="px-4 py-2 border border-gray-400">Sahar Halim</td>
                                      <td className="px-4 py-2 border border-gray-400">6:30:33</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </div>
                                
                            <p className="mb-4 mt-8">Beyond their individual achievements, the presence of Pakistani runners served as a beacon of inspiration, fostering a sense of unity and camaraderie among participants and spectators alike. Their unwavering determination and resilience exemplify the essence of the Boston Marathon – a celebration of human spirit and endurance.</p>
                            <p className="mb-4">As we reflect on the highlights of the 2024 Boston Marathon, let us not only celebrate the remarkable victories of elite athletes but also acknowledge the triumphs of every participant, including the ten Pakistani runners who left an indelible mark on the historic race.</p>
                            <p className="mb-4">Feel free to share your thoughts and add images of these remarkable Pakistani runners as a tribute to their outstanding achievements in the marathon.</p>
                          </article>
                        </div>

                      </div>
                    </div>
                    {/* First Ad Space 
                    <div className="mb-8 text-center h-28 mt-20"> 
                        <img src="ad2.jpg" alt="Advertisement 2" className="mx-auto h-full"> </img>
                    </div>
                    */}
              </>
);
};
export default BostonMarathon2024;
