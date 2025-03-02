import '@/styles'
import { Head } from 'minista'
import Header from '@/layouts/Header'
import Content from '@/layouts/Content'
import Footer from '@/layouts/Footer'

export default function (props) {
  const {
    children,
    title,
    url,
  } = props

  return (
    <>
      <Head htmlAttributes={{ lang: 'en' }}>
        <title>Stream Vibe | {title}</title>
        <script src="/src/main.js" type="module" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Header url={url}/>
      <Content>
        {children}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque pariatur iste id ex et eos nihil obcaecati adipisci in vero soluta, debitis explicabo beatae natus repudiandae autem iure similique vitae incidunt quis voluptatum, veritatis corporis amet non! Accusantium temporibus explicabo modi inventore, nemo laborum voluptas repellat impedit eos sed quos eius velit? Quis ducimus distinctio maxime autem corrupti ex sit excepturi veritatis iure. Repellendus itaque saepe, dicta autem ducimus voluptatum! Assumenda cupiditate distinctio id debitis tempore impedit iusto maxime voluptas ab nemo, in placeat doloremque perspiciatis enim quas aut illum? Labore omnis ullam ratione facere perspiciatis voluptates saepe reprehenderit voluptate, aspernatur nemo unde cumque quam optio quaerat alias dolor sit tempore facilis accusamus harum vero error doloribus quis. Commodi debitis obcaecati ad officiis, corporis vel deserunt voluptates asperiores voluptatem cum quasi nihil hic accusantium nostrum amet repellat sapiente voluptas. Distinctio laboriosam autem sit ab eveniet, ipsam cum molestias aut, officia soluta maxime praesentium libero odio tempora doloremque vero, commodi velit asperiores sunt mollitia repudiandae expedita rem. Ducimus necessitatibus molestiae, fugit magnam quo nesciunt consequuntur esse, ab quae accusantium optio repellendus repudiandae sit in commodi. Magnam est ipsam eius, quae quisquam nulla veniam laborum dolorem optio facere incidunt aliquam neque inventore aut, numquam vitae sequi unde, minima praesentium sapiente ratione expedita voluptas et odit. Asperiores, iusto excepturi repellat saepe neque quaerat dolores cum, delectus necessitatibus, illo facere possimus nostrum non rerum earum voluptates. Provident cum laudantium laboriosam distinctio obcaecati modi officiis corporis unde veniam ea libero, iure adipisci impedit quod eligendi blanditiis. Amet reprehenderit sequi numquam. Impedit cupiditate eveniet in placeat fugit, doloremque quidem excepturi animi sapiente culpa, quam eum. Animi molestiae, aperiam maxime asperiores assumenda, qui commodi rerum, possimus non dignissimos quisquam dicta quasi velit fuga reprehenderit ipsa magni labore unde laboriosam tempore. Corporis, quas? Debitis dolor quaerat error ea fuga porro laborum tenetur, consectetur laudantium in incidunt! Excepturi officiis facilis, est inventore, quidem eos praesentium in nihil, exercitationem saepe laudantium porro molestias dignissimos officia corporis quis. Dolorem saepe nulla omnis asperiores exercitationem ab ducimus nesciunt eius alias beatae explicabo ullam sit praesentium aut ipsum, atque accusantium incidunt quasi porro. Ducimus corrupti recusandae ex autem eligendi repellat fuga quaerat. Quisquam amet cupiditate qui omnis quas optio inventore quam nulla assumenda necessitatibus nam labore dicta, nihil id distinctio velit quaerat asperiores explicabo, odit sit? Illo cumque itaque molestiae? Harum odio qui illo alias odit. Libero, distinctio illum architecto, praesentium nulla, excepturi sunt est quos nisi quis iure repudiandae ratione eligendi delectus obcaecati quia voluptas deleniti. Maiores sint voluptates quis hic doloremque esse velit repellat debitis, harum rerum a ea id. Voluptatum culpa eius velit soluta voluptas quasi natus obcaecati? Quas est et consequuntur, dolore alias asperiores doloremque quasi atque quibusdam laboriosam minima fuga eos! Rem non provident tempora illo voluptatem, sit enim. Quod, dolores nihil exercitationem animi excepturi accusantium, ad, aliquid officiis unde tenetur dolore. Eligendi quidem ipsam est quae, ratione recusandae similique totam perferendis eaque voluptas, rem impedit facilis reprehenderit debitis quas enim laboriosam tempore? Sequi voluptates libero laborum expedita voluptatibus corporis? Tempora ab, rerum autem consequatur earum doloremque ducimus laborum ad veniam, nihil soluta facere asperiores eos, enim eum amet dolor laudantium magnam repellendus. Voluptatibus fuga sit nihil, ab quam inventore molestias velit ipsa nam perferendis voluptas animi repellat laboriosam veniam tenetur eius odit dolore nulla quod illo officia neque temporibus explicabo? Sed, eum. Eaque quibusdam veritatis, adipisci, et dolorem fugit illum ratione odio, illo beatae soluta hic quas est. Assumenda, dolor ipsa, tempore dolorum voluptatum maiores delectus pariatur numquam vel expedita officiis odit nihil quae, corrupti culpa nisi. Nisi tempora recusandae doloremque itaque ipsum unde dolorum! Laborum alias, blanditiis earum ex a assumenda necessitatibus cumque cum, nisi repellendus hic officiis veritatis ad suscipit nulla doloribus nihil esse, ea consequatur reiciendis? Vero repellat tenetur mollitia laborum soluta cum doloremque quod aperiam, corporis consectetur voluptatibus maxime laudantium accusantium? Necessitatibus reprehenderit exercitationem, nisi laborum tempore minus. Explicabo saepe ipsam aperiam quidem blanditiis culpa, nam laboriosam nobis quaerat provident commodi iste repudiandae dolor qui tempore eum enim natus repellat dolorum. Minus maxime ipsa saepe dignissimos, nemo accusantium? Ipsam quibusdam sit dolorem laudantium velit porro dolorum repudiandae, harum minima voluptatem debitis aliquid quam culpa id asperiores quis itaque libero modi nam ipsa aperiam eos expedita et veritatis! Corporis modi sunt exercitationem laborum, sint voluptatem facere aperiam dolores tenetur aliquam. Voluptates nostrum quo harum. Deleniti molestiae voluptate et ab. Similique consequatur quam corrupti possimus assumenda ab temporibus nihil adipisci molestias consequuntur dolore tempora sit porro iusto eius accusamus atque, eveniet quae aspernatur reprehenderit sequi! Impedit ut eos odit maiores blanditiis vitae et qui dolor voluptatem cupiditate quos nemo autem, quas repellendus, deleniti veritatis, sapiente porro iusto. Vero velit magni veritatis voluptates et molestiae? Illo facilis pariatur quisquam voluptatibus qui aspernatur quo veniam quas doloremque rerum et, recusandae necessitatibus quia tenetur possimus aliquid. Esse sed deserunt corrupti unde iusto numquam obcaecati perspiciatis aut error iure odit maxime hic blanditiis fugiat minima commodi a, eum qui harum ab quidem modi sequi. Omnis ad culpa, magnam nostrum odio minima accusantium dolore repudiandae velit nihil, fuga sint voluptates maiores praesentium, blanditiis impedit maxime debitis minus! Reiciendis, accusantium in amet maxime voluptas id sed ut cum, aliquid quia ex temporibus quidem? Dolore quasi odit rerum sed et, reprehenderit cum libero laborum voluptatem natus quis nostrum necessitatibus placeat. Hic dolor eveniet delectus suscipit libero rerum voluptatem, incidunt ad mollitia exercitationem veniam porro qui vel unde autem quisquam! Ratione corporis perferendis et molestias dignissimos quis, quia ad in! Nobis reprehenderit aliquid exercitationem odit quae amet? Totam quaerat perspiciatis quas cupiditate doloremque ullam officia reiciendis pariatur atque quos asperiores temporibus tenetur provident corporis quasi vitae sit sequi ut vero, qui eligendi commodi necessitatibus a reprehenderit? Blanditiis reiciendis quia voluptatibus. Temporibus assumenda vitae quam perspiciatis maxime cupiditate, dicta suscipit dolorem, nihil tenetur reprehenderit ipsam ad exercitationem laudantium quis? Aperiam eum fugit et aut expedita, dignissimos, ut corrupti obcaecati debitis, eligendi labore adipisci perferendis dolorum doloremque distinctio suscipit. Nam natus itaque dolores in inventore id laborum odit accusantium, earum, fugiat voluptates delectus libero. Vero molestiae modi debitis a delectus, nihil eaque. Quibusdam molestias modi labore ex deserunt illum optio odit, accusantium excepturi perspiciatis sed eos vitae. Nesciunt ratione numquam blanditiis reprehenderit ipsam dicta accusamus esse alias aut vero sapiente cupiditate veniam, vitae maxime voluptatum minima rem illum ipsum itaque ut, aperiam autem voluptatem. Iure necessitatibus, cumque placeat nulla quis tempora voluptates, aliquam aspernatur commodi optio sint soluta est error totam ipsa beatae? Amet perferendis non vero nemo similique ullam nam sit deserunt, nesciunt aspernatur excepturi magnam magni, eligendi numquam deleniti neque, vitae architecto velit accusantium dolorum ab impedit. Illo ad, perferendis dolores praesentium provident nobis dolorem excepturi quibusdam molestias labore autem? Non odio culpa vero molestiae excepturi quibusdam iusto necessitatibus at labore tempora, quam quia autem ab saepe neque magnam. Placeat laborum consequatur at minus debitis officiis tempore explicabo vero voluptates aperiam a blanditiis iste ex sapiente, velit pariatur eos soluta maiores totam illo dolore! Inventore, et mollitia? Aliquid, at ad ab dignissimos nemo et libero totam, necessitatibus tenetur voluptates vero. Sit, ut accusantium doloremque reiciendis vitae id, neque facilis porro eos sed itaque quae dolorem eveniet. Labore, voluptatum. Possimus beatae nam corrupti, sint aliquid eos tempore exercitationem iure illum consequuntur ipsa labore rerum excepturi natus quasi totam velit neque iste reprehenderit laudantium, praesentium quod dolor in a. Recusandae, provident sequi, id at corrupti praesentium veniam impedit exercitationem soluta aperiam quod? Cupiditate doloribus omnis veritatis non quibusdam porro vero? Vero distinctio totam unde cumque voluptate autem tenetur illum sed repellendus omnis quis sint nobis ratione quod rem expedita ea, soluta ipsam aut at repudiandae deleniti voluptas quos. Error, numquam. Mollitia impedit alias eveniet nostrum, distinctio ducimus, maiores adipisci labore sunt a saepe pariatur? Nobis et veniam libero illo vero sed molestiae quidem voluptatem quam ex ducimus ad dolorem, sapiente officia, consequuntur dicta quisquam neque ipsa aspernatur. Rerum aut, inventore quo soluta possimus, necessitatibus corporis blanditiis reprehenderit minima suscipit quibusdam nesciunt dicta vero facilis iure quaerat unde sed ea enim! Perferendis excepturi neque in odio iure ut doloremque doloribus necessitatibus, suscipit perspiciatis consequatur magni eos consequuntur facilis itaque debitis nam numquam totam labore ipsum dolores atque. Voluptatem, laudantium architecto. Molestias, incidunt officia. Sint inventore quam nihil corporis alias, maxime velit sequi iusto beatae quis repellendus dolorem quas ipsum? Ipsum dolor rem, adipisci libero quidem numquam sit. Vel, ipsa harum asperiores alias consequuntur quod quidem nisi corporis at perspiciatis assumenda et repudiandae eaque vero totam, natus sapiente culpa. Dolores eligendi aperiam repellat voluptate dolor dicta impedit deserunt, perferendis ipsam quaerat quod, facilis a, magnam id libero vel autem delectus? Aspernatur aperiam sed officiis nesciunt tempora dolorum, voluptas a fuga harum esse ducimus delectus nemo sit explicabo labore quasi eius voluptates officia ipsam unde deserunt! Unde rerum cum deleniti saepe commodi debitis eius corporis, dolores pariatur praesentium! Facilis, nam hic? Illo doloremque reprehenderit commodi voluptas atque id voluptatum hic accusamus, necessitatibus sapiente beatae ab blanditiis alias itaque! Nemo quae inventore nihil nobis, blanditiis officia ipsam ullam consequatur non illo, deleniti, atque cumque accusantium molestiae quia doloribus cum neque minus aut. Tempore, odit sint illum magnam accusamus ad ipsa magni quisquam asperiores, consectetur earum voluptatum ab, aliquam perspiciatis voluptatem repellendus ea sed numquam fuga. Deleniti autem necessitatibus non nulla sunt similique mollitia odio. Recusandae repellat numquam eaque magni optio necessitatibus a impedit, minus vero quae maxime debitis deserunt nostrum blanditiis perspiciatis ullam animi? Aspernatur enim dicta numquam ducimus adipisci alias consectetur illo facilis corporis excepturi, placeat cumque, temporibus aliquam, assumenda hic! Veritatis animi unde nihil, distinctio omnis aut harum expedita odit ipsa modi libero voluptas numquam labore id sequi. Amet cupiditate vel consequatur blanditiis a reiciendis cumque, illum optio sit soluta expedita corrupti doloremque sequi iure odit sapiente totam incidunt! Tempora, commodi beatae dolorum non possimus itaque nostrum dolores facilis et incidunt dolore fuga corporis ad reprehenderit doloribus dicta. Iste hic autem numquam suscipit excepturi delectus, voluptatum corporis minima ipsam sapiente error unde tempore veritatis dolores similique inventore magnam! Eaque labore consectetur suscipit sit vel sunt eligendi amet enim repellat assumenda! Doloremque molestias aliquid ea quod eos totam saepe cupiditate quibusdam tenetur labore, perferendis reprehenderit dicta laborum hic quasi dolor officia velit voluptas beatae doloribus sapiente, repudiandae iusto eaque quis! Accusamus veritatis, ipsam non sapiente nobis doloremque tempore provident neque, doloribus tempora numquam a? Quos officia placeat ullam quo, asperiores vel libero, nemo sit id iste provident laborum non eum? Vel eius officia reprehenderit temporibus nihil, suscipit quas, deleniti sit excepturi officiis maxime natus deserunt voluptas. Esse eveniet porro iure vero eos perferendis animi nostrum facere quaerat quam, nesciunt amet earum sunt quibusdam odio obcaecati facilis ratione aut! Harum laudantium ipsum deleniti rem quos, autem corrupti facere saepe quae dolores delectus doloribus ratione. Suscipit excepturi nesciunt temporibus. Perferendis cupiditate voluptates culpa eum quisquam, vel eligendi! Cumque inventore eos dignissimos nulla quia unde iste natus nostrum commodi laborum eligendi quis quibusdam architecto similique, maxime minus nesciunt labore dolore consequuntur rerum doloremque. Delectus, at. Corrupti aliquid accusantium voluptates quidem in. Quam est soluta sapiente deleniti culpa amet unde voluptatem dicta, nam doloribus sunt expedita dolorem adipisci, asperiores vitae quod. Delectus alias ducimus impedit, numquam, ratione atque quae dignissimos eius, qui assumenda dolores consectetur sequi maxime expedita amet deserunt vel facilis voluptate accusantium harum recusandae! Unde optio magni, velit atque repudiandae architecto illo necessitatibus illum doloribus hic, dolorum iste aperiam veniam dolorem, itaque corporis reiciendis eum placeat et eius cum voluptatum quia exercitationem amet. Molestiae laborum quam quod minima assumenda veritatis placeat itaque illum officia, saepe quos consequuntur eius. Aspernatur inventore cumque necessitatibus animi obcaecati odit explicabo voluptate corrupti omnis dolor excepturi iusto vero, alias, veritatis ratione ipsam quam adipisci quaerat quo labore vitae? Itaque, natus repellat beatae dolorum, sint eveniet enim odio doloremque maxime magnam nihil animi ex? Corrupti modi voluptatem tenetur delectus, cumque nemo ipsa sint molestias aliquam itaque inventore sit illo obcaecati aspernatur earum, voluptas repellat vel? Voluptates laboriosam suscipit labore dolorem odio dicta quod unde at alias optio odit, omnis iusto, molestias asperiores dignissimos corporis laudantium voluptatum. Doloribus quisquam officiis blanditiis nemo eius totam asperiores quibusdam veritatis.
      </Content>
      <Footer />
    </>
  )
}
