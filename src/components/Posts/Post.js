import { useSelector } from "react-redux";
import { selectPosts } from "./postsSlice";
import "./style.css";
import pluralize from "pluralize";
import { Voter } from "../../features/Voter";

export function Post(props) {
  function postCreatedTimeDifference() {
    const timeDifferenceUnix = Date.now() - props.created_time * 1000;
    const timeDifference = new Date(timeDifferenceUnix);
    return timeDifference.getMonth()
      ? `${pluralize("month", timeDifference.getMonth(), true)} ago`
      : timeDifference.getDate() - 1
      ? `${pluralize("day", timeDifference.getDate(), true)} ago`
      : timeDifference.getHours()
      ? `${pluralize("hour", timeDifference.getHours(), true)} ago`
      : timeDifference.getMinutes()
      ? `${pluralize("minute", timeDifference.getMinutes(), true)} ago`
      : "less than a minute ago";
  }

  return (
    <div className="post">
      <div className="sideBar hide">
        <Voter votes={props.ups} />
      </div>
      <div className="main">
        <div className="topBar">
          <h3>{props.title}</h3>
        </div>
        <div className="middleBar">
          {props.post_hint === "hosted:video" ? (
            <video src={props.video} type="video" width="100%" controls></video>
          ) : props.post_hint === "image" ? (
            <img src={props.preview} alt="preview" />
          ) : props.post_hint === "link" ? (
            <a href={props.preview}> link </a>
          ) : (
            ""
          )}
          <hr></hr>
        </div>
        <div className="bottomBar">
          <p>
            <strong>by {props.author}</strong>
          </p>
          <p>{postCreatedTimeDifference()}</p>
          <p>
            {props.comments > 1000
              ? Math.round(props.comments / 100) / 10 + "k"
              : props.comments}{" "}
            Comments
          </p>
        </div>
      </div>
    </div>
  );
}
/*

// thumbnail(pin):"https://a.thumbs.redditmedia.com/RFjB7oRHMEMxX8vpygk3VpxrO02cfs8kQaZNqw7NMX0.jpg"

{
    '3': {
      kind: 't3',
      data: {
        // approved_at_utc: null,
        // subreddit: 'Tinder',
        // selftext: '',
        // author_fullname: 't2_ehknn31k',
        // saved: false,
        // mod_reason_title: null,
        // gilded: 0,
        // clicked: false,
        // title: '25 F, is this too heavy handed? I don\'t want to be obnoxious, but I also know what I\'m about and don\'t want to waste anybody\'s time.',
        // link_flair_richtext: [],
        // subreddit_name_prefixed: 'r/Tinder',
        // hidden: false,
        // pwls: 6,
        // link_flair_css_class: null,
        // downs: 0,
        // thumbnail_height: 93,
        // top_awarded_type: null,
        // hide_score: false,
        // name: 't3_ymn09m',
        // quarantine: false,
        // link_flair_text_color: 'dark',
        // upvote_ratio: 0.75,
        // author_flair_background_color: null,
        // subreddit_type: 'public',
        // ups: 13382,
        // total_awards_received: 3,
        // media_embed: {},
        // thumbnail_width: 140,
        // author_flair_template_id: null,
        // is_original_content: false,
        // user_reports: [],
        // secure_media: null,
        is_reddit_media_domain: true,
        // is_meta: false,
        // category: null,
        // secure_media_embed: {},
        // link_flair_text: null,
        // can_mod_post: false,
        // score: 13382,
        // approved_by: null,
        // is_created_from_ads_ui: false,
        // author_premium: false,
        // thumbnail: 'https://b.thumbs.redditmedia.com/AInLmrguB55Jxj3KciG1iJEyyZs4rwdyzvKIKIBUUWc.jpg',
        // edited: false,
        // author_flair_css_class: null,
        // author_flair_richtext: [],
        // gildings: {
        //   gid_1: 1
        // },
        post_hint: 'image',
        content_categories: null,
        is_self: false,
        mod_note: null,
        created: 1667632602,
        link_flair_type: 'text',
        wls: 6,
        removed_by_category: null,
        banned_by: null,
        author_flair_type: 'text',
        domain: 'i.redd.it',
        allow_live_comments: true,
        selftext_html: null,
        likes: null,
        suggested_sort: 'confidence',
        banned_at_utc: null,
        url_overridden_by_dest: 'https://i.redd.it/nn7cto1xj4y91.png',
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
                url: 'https://preview.redd.it/nn7cto1xj4y91.png?auto=webp&amp;s=8e3bf3927b4a2585a7034580ac402698fe57327c',
                width: 1080,
                height: 723
              },
              resolutions: [
                {
                  url: 'https://preview.redd.it/nn7cto1xj4y91.png?width=108&amp;crop=smart&amp;auto=webp&amp;s=969c85851b18cd3dea73deee5c2b3b5919770379',
                  width: 108,
                  height: 72
                },
                {
                  url: 'https://preview.redd.it/nn7cto1xj4y91.png?width=216&amp;crop=smart&amp;auto=webp&amp;s=dd21df8ba037b0bee78e25eb9a9a658f9abca234',
                  width: 216,
                  height: 144
                },
                {
                  url: 'https://preview.redd.it/nn7cto1xj4y91.png?width=320&amp;crop=smart&amp;auto=webp&amp;s=3a40c065fd0c1f5a687dda8b1757a0c4ba583f52',
                  width: 320,
                  height: 214
                },
                {
                  url: 'https://preview.redd.it/nn7cto1xj4y91.png?width=640&amp;crop=smart&amp;auto=webp&amp;s=10205f40921f4d18b56a168ea01fd6824e7da92c',
                  width: 640,
                  height: 428
                },
                {
                  url: 'https://preview.redd.it/nn7cto1xj4y91.png?width=960&amp;crop=smart&amp;auto=webp&amp;s=f058d3ebac7ae2964f9b0827eb9be8570026ab3b',
                  width: 960,
                  height: 642
                },
                {
                  url: 'https://preview.redd.it/nn7cto1xj4y91.png?width=1080&amp;crop=smart&amp;auto=webp&amp;s=e8c4a027b0a663f84481266e75771f5f2e9178cf',
                  width: 1080,
                  height: 723
                }
              ],
              variants: {},
              id: 'RC4Pw8T_P3uInUb3Bl0A5LoenlXv7Jf89q7PA0mjZmA'
            }
          ],
          enabled: true
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
            coin_price: 150,
            id: 'award_f44611f1-b89e-46dc-97fe-892280b13b82',
            penny_donate: null,
            award_sub_type: 'GLOBAL',
            coin_reward: 0,
            icon_url: 'https://i.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png',
            days_of_premium: null,
            tiers_by_required_awardings: null,
            resized_icons: [
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=16&amp;height=16&amp;auto=webp&amp;s=a5662dfbdb402bf67866c050aa76c31c147c2f45',
                width: 16,
                height: 16
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=32&amp;height=32&amp;auto=webp&amp;s=a6882eb3f380e8e88009789f4d0072e17b8c59f1',
                width: 32,
                height: 32
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=48&amp;height=48&amp;auto=webp&amp;s=e50064b090879e8a0b55e433f6ee61d5cb5fbe1d',
                width: 48,
                height: 48
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=64&amp;height=64&amp;auto=webp&amp;s=8e5bb2e76683cb6b161830bcdd9642049d6adc11',
                width: 64,
                height: 64
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=128&amp;height=128&amp;auto=webp&amp;s=eda4a9246f95f42ee6940cc0ec65306fd20de878',
                width: 128,
                height: 128
              }
            ],
            icon_width: 2048,
            static_icon_width: 2048,
            start_date: null,
            is_enabled: true,
            awardings_required_to_grant_benefits: null,
            description: 'Thank you stranger. Shows the award.',
            end_date: null,
            sticky_duration_seconds: null,
            subreddit_coin_reward: 0,
            count: 1,
            static_icon_height: 2048,
            name: 'Helpful',
            resized_static_icons: [
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=16&amp;height=16&amp;auto=webp&amp;s=a5662dfbdb402bf67866c050aa76c31c147c2f45',
                width: 16,
                height: 16
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=32&amp;height=32&amp;auto=webp&amp;s=a6882eb3f380e8e88009789f4d0072e17b8c59f1',
                width: 32,
                height: 32
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=48&amp;height=48&amp;auto=webp&amp;s=e50064b090879e8a0b55e433f6ee61d5cb5fbe1d',
                width: 48,
                height: 48
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=64&amp;height=64&amp;auto=webp&amp;s=8e5bb2e76683cb6b161830bcdd9642049d6adc11',
                width: 64,
                height: 64
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png?width=128&amp;height=128&amp;auto=webp&amp;s=eda4a9246f95f42ee6940cc0ec65306fd20de878',
                width: 128,
                height: 128
              }
            ],
            icon_format: null,
            icon_height: 2048,
            penny_price: null,
            award_type: 'global',
            static_icon_url: 'https://i.redd.it/award_images/t5_22cerq/klvxk1wggfd41_Helpful.png'
          },
          {
            giver_coin_reward: null,
            subreddit_id: null,
            is_new: false,
            days_of_drip_extension: null,
            coin_price: 125,
            id: 'award_5f123e3d-4f48-42f4-9c11-e98b566d5897',
            penny_donate: null,
            award_sub_type: 'GLOBAL',
            coin_reward: 0,
            icon_url: 'https://i.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png',
            days_of_premium: null,
            tiers_by_required_awardings: null,
            resized_icons: [
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=16&amp;height=16&amp;auto=webp&amp;s=92932f465d58e4c16b12b6eac4ca07d27e3d11c0',
                width: 16,
                height: 16
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=32&amp;height=32&amp;auto=webp&amp;s=d11484a208d68a318bf9d4fcf371171a1cb6a7ef',
                width: 32,
                height: 32
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=48&amp;height=48&amp;auto=webp&amp;s=febdf28b6f39f7da7eb1365325b85e0bb49a9f63',
                width: 48,
                height: 48
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=64&amp;height=64&amp;auto=webp&amp;s=b4406a2d88bf86fa3dc8a45aacf7e0c7bdccc4fb',
                width: 64,
                height: 64
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=128&amp;height=128&amp;auto=webp&amp;s=19555b13e3e196b62eeb9160d1ac1d1b372dcb0b',
                width: 128,
                height: 128
              }
            ],
            icon_width: 2048,
            static_icon_width: 2048,
            start_date: null,
            is_enabled: true,
            awardings_required_to_grant_benefits: null,
            description: 'When you come across a feel-good thing.',
            end_date: null,
            sticky_duration_seconds: null,
            subreddit_coin_reward: 0,
            count: 1,
            static_icon_height: 2048,
            name: 'Wholesome',
            resized_static_icons: [
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=16&amp;height=16&amp;auto=webp&amp;s=92932f465d58e4c16b12b6eac4ca07d27e3d11c0',
                width: 16,
                height: 16
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=32&amp;height=32&amp;auto=webp&amp;s=d11484a208d68a318bf9d4fcf371171a1cb6a7ef',
                width: 32,
                height: 32
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=48&amp;height=48&amp;auto=webp&amp;s=febdf28b6f39f7da7eb1365325b85e0bb49a9f63',
                width: 48,
                height: 48
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=64&amp;height=64&amp;auto=webp&amp;s=b4406a2d88bf86fa3dc8a45aacf7e0c7bdccc4fb',
                width: 64,
                height: 64
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png?width=128&amp;height=128&amp;auto=webp&amp;s=19555b13e3e196b62eeb9160d1ac1d1b372dcb0b',
                width: 128,
                height: 128
              }
            ],
            icon_format: null,
            icon_height: 2048,
            penny_price: null,
            award_type: 'global',
            static_icon_url: 'https://i.redd.it/award_images/t5_22cerq/5izbv4fn0md41_Wholesome.png'
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
        subreddit_id: 't5_2w7mz',
        author_is_blocked: false,
        mod_reason_by: null,
        removal_reason: null,
        link_flair_background_color: '',
        id: 'ymn09m',
        is_robot_indexable: true,
        report_reasons: null,
        author: 'agentlastwish',
        discussion_type: null,
        num_comments: 2588,
        send_replies: true,
        whitelist_status: 'all_ads',
        contest_mode: false,
        mod_reports: [],
        author_patreon_flair: false,
        author_flair_text_color: null,
        permalink: '/r/Tinder/comments/ymn09m/25_f_is_this_too_heavy_handed_i_dont_want_to_be/',
        parent_whitelist_status: 'all_ads',
        stickied: false,
        url: 'https://i.redd.it/nn7cto1xj4y91.png',
        subreddit_subscribers: 5614730,
        created_utc: 1667632602,
        num_crossposts: 1,
        media: null,
        is_video: false
      }
    }
  }
  */
