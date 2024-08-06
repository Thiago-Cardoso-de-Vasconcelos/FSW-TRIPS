import React from 'react';

const CaracteristicasSection = () => {
  return (
    <section className='py-24'>
      <div className='container mx-auto px-4'>
        <p className='uppercase text-orange-500 text-center text-sm font-bold font-heading mb-4'>
          CARACTERÍSTICAS
        </p>
        <h1 className='text-center text-4xl lg:text-5xl font-bold font-heading mb-24'>
          Jornadas de aprendizagem personalizadas
        </h1>
        <div className='flex flex-wrap -mx-4'>
          <div className='w-full lg:w-1/2 px-4'>
            <div className='flex flex-col h-full'>
              <div className='pb-4'>
                <div className='rounded-2xl w-14 h-14 flex items-center justify-center bg-purple-900 ml-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='32'
                    height='32'
                    viewBox='0 0 32 32'
                    fill='none'
                  >
                    <path
                      d='M10.9998 2.66669V29.3334H10.4132C5.55984 29.3334 2.6665 26.44 2.6665 21.5867V10.4134C2.6665 5.56002 5.55984 2.66669 10.4132 2.66669H10.9998Z'
                      fill='white'
                    ></path>
                    <path
                      d='M28.8333 10.4134V14.5H13.5V3.16669H21.5867C23.9139 3.16669 25.7113 3.85845 26.9264 5.07357C28.1416 6.2887 28.8333 8.08612 28.8333 10.4134Z'
                      fill='white'
                      stroke='white'
                    ></path>
                    <path
                      d='M29.3333 17V21.5867C29.3333 26.44 26.44 29.3333 21.5867 29.3333H13V17H29.3333Z'
                      fill='white'
                    ></path>
                  </svg>
                </div>
              </div>
              <div className='relative pl-4 pb-12 border-l border-dashed border-gray-50 flex-1'>
                <div className='absolute top-0 -left-px bg-orange-500 w-0.5 h-6'></div>
                <h2 className='text-2xl font-bold font-heading mb-4'>
                  Sala de estudo. Pessoal ou em grupo.
                </h2>
                <p className='text-gray-600'>
                  Otimize o ambiente de estudo com uma sala personalizada,
                  melhore o foco e acomode sessões de estudo em grupo.
                </p>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-1/2 px-4'>
            <div className='flex flex-col h-full'>
              <div className='pb-4 border-l border-dashed border-gray-50 lg:border-transparent'>
                <div className='rounded-2xl w-14 h-14 flex items-center justify-center bg-orange-50 ml-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='32'
                    height='32'
                    viewBox='0 0 32 32'
                    fill='none'
                  >
                    <path
                      d='M16.9036 26.6093C17.2699 26.6945 17.3034 27.1743 16.9466 27.2932L14.84 27.9866C9.54663 29.6932 6.75997 28.2666 5.03997 22.9732L3.3333 17.7066C1.62663 12.4132 3.03997 9.61323 8.3333 7.90656L9.37063 7.56303C9.77349 7.42961 10.1612 7.832 10.0388 8.23834C9.92673 8.6103 9.82162 9.00638 9.71997 9.42656L8.4133 15.0132C6.94663 21.2932 9.0933 24.7599 15.3733 26.2532L16.9036 26.6093Z'
                      fill='#530031'
                    ></path>
                    <path
                      d='M20.5517 4.24675L20.553 4.24707L22.7795 4.76703C22.7796 4.76705 22.7796 4.76706 22.7797 4.76707C25.5248 5.40914 27.1893 6.38163 28.0469 7.76378C28.9044 9.14595 29.0353 11.0675 28.3933 13.806L27.0866 19.3794L27.0864 19.3802C26.5365 21.7434 25.737 23.3113 24.6416 24.2486C23.5632 25.1715 22.1209 25.5474 20.1279 25.3558L20.1279 25.3557L20.1199 25.3551C19.4837 25.3042 18.7899 25.1891 18.0374 25.0075L18.0359 25.0071L15.7959 24.4738L15.7956 24.4737C13.0633 23.825 11.4011 22.8527 10.5432 21.4714C9.68557 20.0906 9.55163 18.1723 10.1935 15.4343L10.1936 15.434L11.5001 9.84803C11.5002 9.84787 11.5002 9.84772 11.5002 9.84756C11.762 8.73511 12.0714 7.78811 12.4488 7.02083L12.4488 7.02084L12.4502 7.01781C13.1858 5.49643 14.1488 4.58359 15.4115 4.14782C16.6975 3.70403 18.3656 3.72969 20.5517 4.24675ZM20.8701 17.9015L20.8701 17.9015L20.8718 17.8948C21.0713 17.0969 20.5926 16.276 19.7744 16.075L15.8966 15.0889L15.8947 15.0884C15.0996 14.8897 14.2768 15.3649 14.075 16.1722C13.8763 16.967 14.3511 17.7894 15.1578 17.9917C15.1582 17.9917 15.1585 17.9918 15.1588 17.9919L19.0369 18.9781L19.0628 18.9847L19.0894 18.9885C19.0985 18.9898 19.1085 18.9913 19.1192 18.9928C19.1943 19.004 19.304 19.0202 19.4134 19.0202C20.087 19.0202 20.6904 18.5805 20.8701 17.9015ZM24.7768 13.3948L24.7769 13.3948L24.7792 13.3853C24.9741 12.586 24.5084 11.7548 23.676 11.5671L17.2163 9.92885L17.2147 9.92844C16.4196 9.72967 15.5968 10.2049 15.395 11.0122C15.1963 11.807 15.6711 12.6294 16.4778 12.8317C16.4781 12.8317 16.4785 12.8318 16.4788 12.8319L22.9438 14.4715L22.9697 14.478L22.996 14.4818C23.0052 14.4831 23.0152 14.4846 23.0259 14.4861C23.1011 14.4973 23.2107 14.5135 23.3201 14.5135C23.9938 14.5135 24.5972 14.0739 24.7768 13.3948Z'
                      fill='#530031'
                    ></path>
                  </svg>
                </div>
              </div>
              <div className='relative pl-4 pb-12 border-l border-dashed border-gray-50 flex-1'>
                <div className='absolute top-0 -left-px bg-purple-900 w-0.5 h-6'></div>
                <h2 className='text-2xl font-bold font-heading mb-4'>
                  Personalização de jornada de estudos
                </h2>
                <p className='text-gray-600'>
                  Adapte o conteúdo e o ritmo de estudo às necessidades
                  individuais para um aprendizado mais eficaz e personalizado.
                </p>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-1/2 px-4 mt-12 lg:mt-0'>
            <div className='flex flex-col h-full'>
              <div className='pb-4'>
                <div className='rounded-2xl w-14 h-14 flex items-center justify-center bg-blue-900 ml-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='32'
                    height='32'
                    viewBox='0 0 32 32'
                    fill='none'
                  >
                    <path
                      d='M21.44 1.6H10.56C6.144 1.6 2.56 5.184 2.56 9.6V22.4C2.56 26.816 6.144 30.4 10.56 30.4H21.44C25.856 30.4 29.44 26.816 29.44 22.4V9.6C29.44 5.184 25.856 1.6 21.44 1.6Z'
                      fill='#fff'
                    ></path>
                    <path
                      d='M19.2 16H14.4C13.44 16 12.8 15.36 12.8 14.4C12.8 13.44 13.44 12.8 14.4 12.8H19.2C20.16 12.8 20.8 13.44 20.8 14.4C20.8 15.36 20.16 16 19.2 16ZM19.2 20.8H14.4C13.44 20.8 12.8 20.16 12.8 19.2C12.8 18.24 13.44 17.6 14.4 17.6H19.2C20.16 17.6 20.8 18.24 20.8 19.2C20.8 20.16 20.16 20.8 19.2 20.8Z'
                      fill='#530031'
                    ></path>
                  </svg>
                </div>
              </div>
              <div className='relative pl-4 pb-12 border-l border-dashed border-gray-50 flex-1'>
                <div className='absolute top-0 -left-px bg-blue-900 w-0.5 h-6'></div>
                <h2 className='text-2xl font-bold font-heading mb-4'>
                  Feedback e avaliação contínuos
                </h2>
                <p className='text-gray-600'>
                  Receba feedback constante e avaliações periódicas para
                  acompanhar seu progresso e identificar áreas de melhoria.
                </p>
              </div>
            </div>
          </div>
          <div className='w-full lg:w-1/2 px-4 mt-12 lg:mt-0'>
            <div className='flex flex-col h-full'>
              <div className='pb-4 border-l border-dashed border-gray-50 lg:border-transparent'>
                <div className='rounded-2xl w-14 h-14 flex items-center justify-center bg-green-900 ml-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='32'
                    height='32'
                    viewBox='0 0 32 32'
                    fill='none'
                  >
                    <path
                      d='M21.44 1.6H10.56C6.144 1.6 2.56 5.184 2.56 9.6V22.4C2.56 26.816 6.144 30.4 10.56 30.4H21.44C25.856 30.4 29.44 26.816 29.44 22.4V9.6C29.44 5.184 25.856 1.6 21.44 1.6Z'
                      fill='#fff'
                    ></path>
                    <path
                      d='M19.2 16H14.4C13.44 16 12.8 15.36 12.8 14.4C12.8 13.44 13.44 12.8 14.4 12.8H19.2C20.16 12.8 20.8 13.44 20.8 14.4C20.8 15.36 20.16 16 19.2 16ZM19.2 20.8H14.4C13.44 20.8 12.8 20.16 12.8 19.2C12.8 18.24 13.44 17.6 14.4 17.6H19.2C20.16 17.6 20.8 18.24 20.8 19.2C20.8 20.16 20.16 20.8 19.2 20.8Z'
                      fill='#530031'
                    ></path>
                  </svg>
                </div>
              </div>
              <div className='relative pl-4 pb-12 border-l border-dashed border-gray-50 flex-1'>
                <div className='absolute top-0 -left-px bg-green-900 w-0.5 h-6'></div>
                <h2 className='text-2xl font-bold font-heading mb-4'>
                  Conteúdo diversificado e atualizado
                </h2>
                <p className='text-gray-600'>
                  Acesse uma variedade de recursos e materiais de estudo
                  atualizados regularmente para garantir um aprendizado
                  contínuo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaracteristicasSection;
