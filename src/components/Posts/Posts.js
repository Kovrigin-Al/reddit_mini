import { Post } from "./Post";
import { useEffect } from "react";
import { fetchPosts, selectPosts } from "./postsSlice";
import { useDispatch, useSelector } from "react-redux";

export function Posts() {
  const dispatch = useDispatch();

  const postsStatus = useSelector((state) => state.posts.status);
  const searchQuery = useSelector((state) => state.searchBar.searchQuery);

  useEffect(() => {
    if (postsStatus === "idle" || "succeeded") {
      dispatch(fetchPosts());
    }
  }, [searchQuery]);

  const posts = useSelector(selectPosts);
  return (
    <>
      <div id="top"></div>
      {posts.map((post, index) => (
        <Post
          key={index.toString()}
          title={post.data.title}
          preview={post.data.preview ? post.data.url : ""}
          ups={post.data.ups}
          comments={post.data.num_comments}
          created_time={post.data.created_utc}
          author={post.data.author}
          is_video={post.data.is_video}
          video={
            post.data.is_video ? post.data.media.reddit_video.fallback_url : ""
          }
          post_hint={post.data.post_hint}
        />
      ))}
    </>
  );
}

/*
{
  '2': {
    kind: 't3',
    data: {
      // approved_at_utc: null,
      // subreddit: 'nottheonion',
      // selftext: '',
      // author_fullname: 't2_134rjs',
      // saved: false,
      // mod_reason_title: null,
      // gilded: 0,
      // clicked: false,
      // title: 'Joe Rogan admits schools don’t have litter boxes for kids who ‘identify’ as furries',
      // link_flair_richtext: [],
      // subreddit_name_prefixed: 'r/nottheonion',
      // hidden: false,
      // pwls: 6,
      // link_flair_css_class: null,
      // downs: 0,
      // thumbnail_height: 73,
      // top_awarded_type: null,
      // hide_score: false,
      // name: 't3_ymni5w',
      // quarantine: false,
      // link_flair_text_color: 'dark',
      // upvote_ratio: 0.87,
      // author_flair_background_color: null,
      // subreddit_type: 'public',
      // ups: 35203,
      // total_awards_received: 4,
      // media_embed: {},
      // thumbnail_width: 140,
      // author_flair_template_id: null,
      // is_original_content: false,
      // user_reports: [],
      // secure_media: null,
      is_reddit_media_domain: false,
      // is_meta: false,
      // category: null,
      // secure_media_embed: {},
      // link_flair_text: null,
      // can_mod_post: false,
      // score: 35203,
      // approved_by: null,
      // is_created_from_ads_ui: false,
      // author_premium: false,
      // thumbnail: 'https://a.thumbs.redditmedia.com/RFjB7oRHMEMxX8vpygk3VpxrO02cfs8kQaZNqw7NMX0.jpg',
      // edited: false,
      // author_flair_css_class: null,
      // author_flair_richtext: [],
      // gildings: {
        // gid_1: 1
      // },
      post_hint: 'link',
      content_categories: null,
      is_self: false,
      mod_note: null,
      created: 1667634410,
      link_flair_type: 'text',
      wls: 6,
      removed_by_category: null,
      banned_by: null,
      author_flair_type: 'text',
      domain: 'theguardian.com',
      allow_live_comments: true,
      selftext_html: null,
      likes: null,
      suggested_sort: null,
      banned_at_utc: null,
      url_overridden_by_dest: 'https://www.theguardian.com/culture/2022/nov/04/joe-rogan-school-litter-boxes-kids-furries-gender',
      view_count: null,
      archived: false,
      no_follow: false,
      is_crosspostable: false,
      pinned: false,
      over_18: false,
      preview: {
        images: [
          {
            source: {
              url: 'https://external-preview.redd.it/ysnNntdqVSY9_nfpag4LoTw5WPbWPeP8L1dz7zHwceg.jpg?auto=webp&amp;s=375ec6a224973f86cf4310921709d4652d98a646',
              width: 1200,
              height: 630
            },
            resolutions: [
              {
                url: 'https://external-preview.redd.it/ysnNntdqVSY9_nfpag4LoTw5WPbWPeP8L1dz7zHwceg.jpg?width=108&amp;crop=smart&amp;auto=webp&amp;s=cf44d23725411a5309b3680e281d1e0e4ed1d6bb',
                width: 108,
                height: 56
              },
              {
                url: 'https://external-preview.redd.it/ysnNntdqVSY9_nfpag4LoTw5WPbWPeP8L1dz7zHwceg.jpg?width=216&amp;crop=smart&amp;auto=webp&amp;s=ed9e8f6e912ca7fa77b97f86fc8ce8e0716156bb',
                width: 216,
                height: 113
              },
              {
                url: 'https://external-preview.redd.it/ysnNntdqVSY9_nfpag4LoTw5WPbWPeP8L1dz7zHwceg.jpg?width=320&amp;crop=smart&amp;auto=webp&amp;s=8cc263aaa68ee6967b0b54f4640c1a5bdb5e99f0',
                width: 320,
                height: 168
              },
              {
                url: 'https://external-preview.redd.it/ysnNntdqVSY9_nfpag4LoTw5WPbWPeP8L1dz7zHwceg.jpg?width=640&amp;crop=smart&amp;auto=webp&amp;s=766b5b73f3d19a8ad0cda721111cd3548b88ae6e',
                width: 640,
                height: 336
              },
              {
                url: 'https://external-preview.redd.it/ysnNntdqVSY9_nfpag4LoTw5WPbWPeP8L1dz7zHwceg.jpg?width=960&amp;crop=smart&amp;auto=webp&amp;s=779acab43466a0218b959f475a513b5b47cf45fc',
                width: 960,
                height: 504
              },
              {
                url: 'https://external-preview.redd.it/ysnNntdqVSY9_nfpag4LoTw5WPbWPeP8L1dz7zHwceg.jpg?width=1080&amp;crop=smart&amp;auto=webp&amp;s=1efa798a649d8c3cc04bc84ff1a60f73fb0f1e43',
                width: 1080,
                height: 567
              }
            ],
            variants: {},
            id: 'wNulRY-opMLiS3sFZFOrMFSBNPc3LAnhuYFRoupBTYg'
          }
        ],
        enabled: false
      },
      all_awardings: [
        {
          giver_coin_reward: null,
          subreddit_id: null,
          is_new: false,
          days_of_drip_extension: null,
          coin_price: 100,
          id: 'gid_1',
          penny_donate: null,
          award_sub_type: 'GLOBAL',
          coin_reward: 0,
          icon_url: 'https://www.redditstatic.com/gold/awards/icon/silver_512.png',
          days_of_premium: null,
          tiers_by_required_awardings: null,
          resized_icons: [
            {
              url: 'https://www.redditstatic.com/gold/awards/icon/silver_16.png',
              width: 16,
              height: 16
            },
            {
              url: 'https://www.redditstatic.com/gold/awards/icon/silver_32.png',
              width: 32,
              height: 32
            },
            {
              url: 'https://www.redditstatic.com/gold/awards/icon/silver_48.png',
              width: 48,
              height: 48
            },
            {
              url: 'https://www.redditstatic.com/gold/awards/icon/silver_64.png',
              width: 64,
              height: 64
            },
            {
              url: 'https://www.redditstatic.com/gold/awards/icon/silver_128.png',
              width: 128,
              height: 128
            }
          ],
          icon_width: 512,
          static_icon_width: 512,
          start_date: null,
          is_enabled: true,
          awardings_required_to_grant_benefits: null,
          description: 'Shows the Silver Award... and that\'s it.',
          end_date: null,
          sticky_duration_seconds: null,
          subreddit_coin_reward: 0,
          count: 1,
          static_icon_height: 512,
          name: 'Silver',
          resized_static_icons: [
            {
              url: 'https://www.redditstatic.com/gold/awards/icon/silver_16.png',
              width: 16,
              height: 16
            },
            {
              url: 'https://www.redditstatic.com/gold/awards/icon/silver_32.png',
              width: 32,
              height: 32
            },
            {
              url: 'https://www.redditstatic.com/gold/awards/icon/silver_48.png',
              width: 48,
              height: 48
            },
            {
              url: 'https://www.redditstatic.com/gold/awards/icon/silver_64.png',
              width: 64,
              height: 64
            },
            {
              url: 'https://www.redditstatic.com/gold/awards/icon/silver_128.png',
              width: 128,
              height: 128
            }
          ],
          icon_format: null,
          icon_height: 512,
          penny_price: null,
          award_type: 'global',
          static_icon_url: 'https://www.redditstatic.com/gold/awards/icon/silver_512.png'
        },
        {
          giver_coin_reward: null,
          subreddit_id: null,
          is_new: false,
          days_of_drip_extension: null,
          coin_price: 50,
          id: 'award_02d9ab2c-162e-4c01-8438-317a016ed3d9',
          penny_donate: null,
          award_sub_type: 'GLOBAL',
          coin_reward: 0,
          icon_url: 'https://i.redd.it/award_images/t5_q0gj4/p4yzxkaed5f61_oldtakemyenergy.png',
          days_of_premium: null,
          tiers_by_required_awardings: null,
          resized_icons: [
            {
              url: 'https://preview.redd.it/award_images/t5_q0gj4/p4yzxkaed5f61_oldtakemyenergy.png?width=16&amp;height=16&amp;auto=webp&amp;s=10034f3fdf8214c8377134bb60c5b832d4bbf588',
              width: 16,
              height: 16
            },
            {
              url: 'https://preview.redd.it/award_images/t5_q0gj4/p4yzxkaed5f61_oldtakemyenergy.png?width=32&amp;height=32&amp;auto=webp&amp;s=100f785bf261fa9452a5d82ee0ef0793369dbfa5',
              width: 32,
              height: 32
            },
            {
              url: 'https://preview.redd.it/award_images/t5_q0gj4/p4yzxkaed5f61_oldtakemyenergy.png?width=48&amp;height=48&amp;auto=webp&amp;s=b15d030fdfbbe4af4a5b34ab9dc90a174df40a23',
              width: 48,
              height: 48
            },
            {
              url: 'https://preview.redd.it/award_images/t5_q0gj4/p4yzxkaed5f61_oldtakemyenergy.png?width=64&amp;height=64&amp;auto=webp&amp;s=601c75be6ee30dc4b47a5c65d64dea9a185502a1',
              width: 64,
              height: 64
            },
            {
              url: 'https://preview.redd.it/award_images/t5_q0gj4/p4yzxkaed5f61_oldtakemyenergy.png?width=128&amp;height=128&amp;auto=webp&amp;s=540f36e65c0e2f1347fe32020e4a1565e3680437',
              width: 128,
              height: 128
            }
          ],
          icon_width: 2048,
          static_icon_width: 2048,
          start_date: null,
          is_enabled: true,
          awardings_required_to_grant_benefits: null,
          description: 'I\'m in this with you.',
          end_date: null,
          sticky_duration_seconds: null,
          subreddit_coin_reward: 0,
          count: 2,
          static_icon_height: 2048,
          name: 'Take My Energy',
          resized_static_icons: [
            {
              url: 'https://preview.redd.it/award_images/t5_q0gj4/jtw7x06j68361_TakeMyEnergyElf.png?width=16&amp;height=16&amp;auto=webp&amp;s=045db73f47a9513c44823d132b4c393ab9241b6a',
              width: 16,
              height: 16
            },
            {
              url: 'https://preview.redd.it/award_images/t5_q0gj4/jtw7x06j68361_TakeMyEnergyElf.png?width=32&amp;height=32&amp;auto=webp&amp;s=298a02e0edbb5b5e293087eeede63802cbe1d2c7',
              width: 32,
              height: 32
            },
            {
              url: 'https://preview.redd.it/award_images/t5_q0gj4/jtw7x06j68361_TakeMyEnergyElf.png?width=48&amp;height=48&amp;auto=webp&amp;s=7d06d606eb23dbcd6dbe39ee0e60588c5eb89065',
              width: 48,
              height: 48
            },
            {
              url: 'https://preview.redd.it/award_images/t5_q0gj4/jtw7x06j68361_TakeMyEnergyElf.png?width=64&amp;height=64&amp;auto=webp&amp;s=ecd9854b14104a36a210028c43420f0dababd96b',
              width: 64,
              height: 64
            },
            {
              url: 'https://preview.redd.it/award_images/t5_q0gj4/jtw7x06j68361_TakeMyEnergyElf.png?width=128&amp;height=128&amp;auto=webp&amp;s=0d5d7b92c1d66aff435f2ad32e6330ca2b971f6d',
              width: 128,
              height: 128
            }
          ],
          icon_format: 'PNG',
          icon_height: 2048,
          penny_price: 0,
          award_type: 'global',
          static_icon_url: 'https://i.redd.it/award_images/t5_q0gj4/jtw7x06j68361_TakeMyEnergyElf.png'
        },
        {
          giver_coin_reward: null,
          subreddit_id: null,
          is_new: false,
          days_of_drip_extension: null,
          coin_price: 10,
          id: 'award_d18d4ebe-2e14-4d1f-9b98-bddd9804652f',
          penny_donate: null,
          award_sub_type: 'GLOBAL',
          coin_reward: 0,
          icon_url: 'https://i.redd.it/award_images/t5_22cerq/umy1jevfumw91_IVoted.png',
          days_of_premium: null,
          tiers_by_required_awardings: null,
          resized_icons: [
            {
              url: 'https://preview.redd.it/award_images/t5_22cerq/umy1jevfumw91_IVoted.png?width=16&amp;height=16&amp;auto=webp&amp;s=6e67c316bd1ece451fdef8aea6bad02aefcf285b',
              width: 16,
              height: 16
            },
            {
              url: 'https://preview.redd.it/award_images/t5_22cerq/umy1jevfumw91_IVoted.png?width=32&amp;height=32&amp;auto=webp&amp;s=58b782b64dee579209c89aa548d4ae141a7ede48',
              width: 32,
              height: 32
            },
            {
              url: 'https://preview.redd.it/award_images/t5_22cerq/umy1jevfumw91_IVoted.png?width=48&amp;height=48&amp;auto=webp&amp;s=8725039b185edd599d24fdbfd1f56ce871492d25',
              width: 48,
              height: 48
            },
            {
              url: 'https://preview.redd.it/award_images/t5_22cerq/umy1jevfumw91_IVoted.png?width=64&amp;height=64&amp;auto=webp&amp;s=5bdfbc49aff28aeb834ac49cb7ff98a6ffe3edcd',
              width: 64,
              height: 64
            },
            {
              url: 'https://preview.redd.it/award_images/t5_22cerq/umy1jevfumw91_IVoted.png?width=128&amp;height=128&amp;auto=webp&amp;s=ca142c13005e1e333a77f4bf69b7ee57cca259d3',
              width: 128,
              height: 128
            }
          ],
          icon_width: 2048,
          static_icon_width: 2048,
          start_date: null,
          is_enabled: true,
          awardings_required_to_grant_benefits: null,
          description: '',
          end_date: null,
          sticky_duration_seconds: null,
          subreddit_coin_reward: 0,
          count: 1,
          static_icon_height: 2048,
          name: 'I Voted',
          resized_static_icons: [
            {
              url: 'https://preview.redd.it/award_images/t5_22cerq/umy1jevfumw91_IVoted.png?width=16&amp;height=16&amp;auto=webp&amp;s=6e67c316bd1ece451fdef8aea6bad02aefcf285b',
              width: 16,
              height: 16
            },
            {
              url: 'https://preview.redd.it/award_images/t5_22cerq/umy1jevfumw91_IVoted.png?width=32&amp;height=32&amp;auto=webp&amp;s=58b782b64dee579209c89aa548d4ae141a7ede48',
              width: 32,
              height: 32
            },
            {
              url: 'https://preview.redd.it/award_images/t5_22cerq/umy1jevfumw91_IVoted.png?width=48&amp;height=48&amp;auto=webp&amp;s=8725039b185edd599d24fdbfd1f56ce871492d25',
              width: 48,
              height: 48
            },
            {
              url: 'https://preview.redd.it/award_images/t5_22cerq/umy1jevfumw91_IVoted.png?width=64&amp;height=64&amp;auto=webp&amp;s=5bdfbc49aff28aeb834ac49cb7ff98a6ffe3edcd',
              width: 64,
              height: 64
            },
            {
              url: 'https://preview.redd.it/award_images/t5_22cerq/umy1jevfumw91_IVoted.png?width=128&amp;height=128&amp;auto=webp&amp;s=ca142c13005e1e333a77f4bf69b7ee57cca259d3',
              width: 128,
              height: 128
            }
          ],
          icon_format: 'PNG',
          icon_height: 2048,
          penny_price: 0,
          award_type: 'global',
          static_icon_url: 'https://i.redd.it/award_images/t5_22cerq/umy1jevfumw91_IVoted.png'
        }
      ],
      awarders: [],
      media_only: false,
      can_gild: false,
      spoiler: false,
      locked: false,
      author_flair_text: null,
      treatment_tags: [],
      visited: false,
      removed_by: null,
      num_reports: null,
      distinguished: null,
      subreddit_id: 't5_2qnts',
      author_is_blocked: false,
      mod_reason_by: null,
      removal_reason: null,
      link_flair_background_color: '',
      id: 'ymni5w',
      is_robot_indexable: true,
      report_reasons: null,
      author: 'the-player-of-games',
      discussion_type: null,
      num_comments: 2957,
      send_replies: true,
      whitelist_status: 'all_ads',
      contest_mode: false,
      mod_reports: [],
      author_patreon_flair: false,
      author_flair_text_color: null,
      permalink: '/r/nottheonion/comments/ymni5w/joe_rogan_admits_schools_dont_have_litter_boxes/',
      parent_whitelist_status: 'all_ads',
      stickied: false,
      url: 'https://www.theguardian.com/culture/2022/nov/04/joe-rogan-school-litter-boxes-kids-furries-gender',
      subreddit_subscribers: 21922252,
      created_utc: 1667634410,
      num_crossposts: 5,
      media: null,
      is_video: false
    }
  }
} 

*/
