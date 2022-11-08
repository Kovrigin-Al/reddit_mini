import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const options ={
    name: 'comments',
    initialState: {
        comments: {"postId": ['0',{data: {children: []}}]},
        status: 'idle',
        error: ''
    },
    reducers: {

    },
    extraReducers(builder) {
      builder.addCase(fetchComments.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.comments[action.payload.postId] = action.payload.comments;
      })
      builder.addCase(fetchComments.pending, (state, action) => {
        state.status = 'pending';

      })
      builder.addCase(fetchComments.rejected, (state, action) => {
        state.status = 'error';
        state.error = action.payload;
      })
    }
}



export const commentsSlice = createSlice(options);
export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async ({url, postId}, thunkAPI) => {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const comments = jsonResponse[1].data.children;
    return {comments, postId}
    }
)
export default commentsSlice.reducer;

export const selectComments = (id, state) => state.comments[id][1].children;

/*
{
    '0': {
      kind: 't3',
      data: {
        approved_at_utc: null,
        subreddit: 'facepalm',
        selftext: '',
        author_fullname: 't2_40zkn06z',
        saved: false,
        mod_reason_title: null,
        gilded: 6,
        clicked: false,
        title: 'Policing in America: A legally blind man was walking back from jury duty when Columbia County Florida Sheriffs wrongfully mistook his walking stick for a weapon. When he insisted he would file a complaint the officers decided to arrest him in retaliation.',
        link_flair_richtext: [
          {
            a: ':Misc:',
            e: 'emoji',
            u: 'https://emoji.redditmedia.com/abp88uwvnuo61_t5_2r5rp/Misc'
          },
          {
            e: 'text',
            t: ' 🇲​🇮​🇸​🇨​'
          }
        ],
        subreddit_name_prefixed: 'r/facepalm',
        hidden: false,
        pwls: 6,
        link_flair_css_class: '',
        downs: 0,
        thumbnail_height: 78,
        top_awarded_type: 'ACTIVE',
        hide_score: false,
        name: 't3_ynzkig',
        quarantine: false,
        link_flair_text_color: 'dark',
        upvote_ratio: 0.88,
        author_flair_background_color: null,
        ups: 111507,
        total_awards_received: 76,
        media_embed: {},
        thumbnail_width: 140,
        author_flair_template_id: null,
        is_original_content: false,
        user_reports: [],
        secure_media: {
          reddit_video: {
            bitrate_kbps: 2400,
            fallback_url: 'https://v.redd.it/kdt9s1q7rdy91/DASH_720.mp4?source=fallback',
            height: 720,
            width: 1280,
            scrubber_media_url: 'https://v.redd.it/kdt9s1q7rdy91/DASH_96.mp4',
            dash_url: 'https://v.redd.it/kdt9s1q7rdy91/DASHPlaylist.mpd?a=1670409342%2CZGRkMjZiYzE2OWJiMDMzODJmZWY3YTZjMTc4NDFiOTExMzcyODU5NTkwNjE4YzY3NDY3ODJlZjUwMTljOTdhOA%3D%3D&amp;v=1&amp;f=sd',
            duration: 263,
            hls_url: 'https://v.redd.it/kdt9s1q7rdy91/HLSPlaylist.m3u8?a=1670409342%2CZWUwNjkwODM0M2U1MWMyYTNhY2ZmY2U4ZmVlN2YzYjY3NzI1YTVlN2ZhZDIzYmE0NTM1YTM3NjM0MWI1YWU3Zg%3D%3D&amp;v=1&amp;f=sd',
            is_gif: false,
            transcoding_status: 'completed'
          }
        },
        is_reddit_media_domain: true,
        is_meta: false,
        category: null,
        secure_media_embed: {},
        link_flair_text: ':Misc: 🇲​🇮​🇸​🇨​',
        can_mod_post: false,
        score: 111507,
        approved_by: null,
        is_created_from_ads_ui: false,
        author_premium: true,
        thumbnail: 'https://b.thumbs.redditmedia.com/g-Ahl5efiWvhae4KFlghCp3qyueu2Zqo1iN4fWtEcMw.jpg',
        edited: false,
        author_flair_css_class: null,
        author_flair_richtext: [],
        gildings: {
          gid_1: 13,
          gid_2: 6,
          gid_3: 2
        },
        post_hint: 'hosted:video',
        content_categories: null,
        is_self: false,
        subreddit_type: 'public',
        created: 1667762023,
        link_flair_type: 'richtext',
        wls: 6,
        removed_by_category: null,
        banned_by: null,
        author_flair_type: 'text',
        domain: 'v.redd.it',
        allow_live_comments: true,
        selftext_html: null,
        likes: null,
        suggested_sort: null,
        banned_at_utc: null,
        url_overridden_by_dest: 'https://v.redd.it/kdt9s1q7rdy91',
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
                url: 'https://external-preview.redd.it/IwvO2mGF07OVc0YBNGY-Ss60eAvgkTHl2vBQTWGdMr4.png?format=pjpg&amp;auto=webp&amp;s=ceeba3fdea4492137bcc261623481614e13b9f57',
                width: 1280,
                height: 720
              },
              resolutions: [
                {
                  url: 'https://external-preview.redd.it/IwvO2mGF07OVc0YBNGY-Ss60eAvgkTHl2vBQTWGdMr4.png?width=108&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=22771e850a5c786a49e9b0d577f9ffc60690a500',
                  width: 108,
                  height: 60
                },
                {
                  url: 'https://external-preview.redd.it/IwvO2mGF07OVc0YBNGY-Ss60eAvgkTHl2vBQTWGdMr4.png?width=216&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=e5b1c831e03d7e5e99c75226944c4eb7eb5a44be',
                  width: 216,
                  height: 121
                },
                {
                  url: 'https://external-preview.redd.it/IwvO2mGF07OVc0YBNGY-Ss60eAvgkTHl2vBQTWGdMr4.png?width=320&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=ff1f786ba9328166c57552bf159acd5224cf21c1',
                  width: 320,
                  height: 180
                },
                {
                  url: 'https://external-preview.redd.it/IwvO2mGF07OVc0YBNGY-Ss60eAvgkTHl2vBQTWGdMr4.png?width=640&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=2a938760f7342312ec4910c0b6d4704da9cb9fd2',
                  width: 640,
                  height: 360
                },
                {
                  url: 'https://external-preview.redd.it/IwvO2mGF07OVc0YBNGY-Ss60eAvgkTHl2vBQTWGdMr4.png?width=960&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=36d43ae1dec99cc08afa27e580dab7bb2cbb635c',
                  width: 960,
                  height: 540
                },
                {
                  url: 'https://external-preview.redd.it/IwvO2mGF07OVc0YBNGY-Ss60eAvgkTHl2vBQTWGdMr4.png?width=1080&amp;crop=smart&amp;format=pjpg&amp;auto=webp&amp;s=2c65b1ba9bb0e90ce2c336cb90bb9d53b1df9b4c',
                  width: 1080,
                  height: 607
                }
              ],
              variants: {},
              id: 'olvY-BlwM-lXaDp8kJpkqy8_qhPdy_jMWdjpQfkrhIA'
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
            coin_price: 500,
            id: 'gid_2',
            penny_donate: null,
            award_sub_type: 'GLOBAL',
            coin_reward: 100,
            icon_url: 'https://www.redditstatic.com/gold/awards/icon/gold_512.png',
            days_of_premium: 7,
            tiers_by_required_awardings: null,
            resized_icons: [
              {
                url: 'https://www.redditstatic.com/gold/awards/icon/gold_16.png',
                width: 16,
                height: 16
              },
              {
                url: 'https://www.redditstatic.com/gold/awards/icon/gold_32.png',
                width: 32,
                height: 32
              },
              {
                url: 'https://www.redditstatic.com/gold/awards/icon/gold_48.png',
                width: 48,
                height: 48
              },
              {
                url: 'https://www.redditstatic.com/gold/awards/icon/gold_64.png',
                width: 64,
                height: 64
              },
              {
                url: 'https://www.redditstatic.com/gold/awards/icon/gold_128.png',
                width: 128,
                height: 128
              }
            ],
            icon_width: 512,
            static_icon_width: 512,
            start_date: null,
            is_enabled: true,
            awardings_required_to_grant_benefits: null,
            description: 'Gives 100 Reddit Coins and a week of r/lounge access and ad-free browsing.',
            end_date: null,
            sticky_duration_seconds: null,
            subreddit_coin_reward: 0,
            count: 6,
            static_icon_height: 512,
            name: 'Gold',
            resized_static_icons: [
              {
                url: 'https://www.redditstatic.com/gold/awards/icon/gold_16.png',
                width: 16,
                height: 16
              },
              {
                url: 'https://www.redditstatic.com/gold/awards/icon/gold_32.png',
                width: 32,
                height: 32
              },
              {
                url: 'https://www.redditstatic.com/gold/awards/icon/gold_48.png',
                width: 48,
                height: 48
              },
              {
                url: 'https://www.redditstatic.com/gold/awards/icon/gold_64.png',
                width: 64,
                height: 64
              },
              {
                url: 'https://www.redditstatic.com/gold/awards/icon/gold_128.png',
                width: 128,
                height: 128
              }
            ],
            icon_format: null,
            icon_height: 512,
            penny_price: null,
            award_type: 'global',
            static_icon_url: 'https://www.redditstatic.com/gold/awards/icon/gold_512.png'
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
            count: 16,
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
          },
          {
            giver_coin_reward: null,
            subreddit_id: 't5_2r5rp',
            is_new: false,
            days_of_drip_extension: null,
            coin_price: 500,
            id: 'award_c7b7bdae-1005-44a2-a6ac-90c33373c68f',
            penny_donate: null,
            award_sub_type: 'COMMUNITY',
            coin_reward: 0,
            icon_url: 'https://i.redd.it/award_images/t5_2r5rp/l230c7t59ya81_FeelsBatman.png',
            days_of_premium: null,
            tiers_by_required_awardings: null,
            resized_icons: [
              {
                url: 'https://preview.redd.it/award_images/t5_2r5rp/l230c7t59ya81_FeelsBatman.png?width=16&amp;height=16&amp;auto=webp&amp;s=9ea2f2b8af86e19476c312307199cb0a9456db77',
                width: 16,
                height: 16
              },
              {
                url: 'https://preview.redd.it/award_images/t5_2r5rp/l230c7t59ya81_FeelsBatman.png?width=32&amp;height=32&amp;auto=webp&amp;s=00e96cf1de2633e7cf8039061a31f695d8eee34e',
                width: 32,
                height: 32
              },
              {
                url: 'https://preview.redd.it/award_images/t5_2r5rp/l230c7t59ya81_FeelsBatman.png?width=48&amp;height=48&amp;auto=webp&amp;s=063a3f70641a813a685ebd1f45f0581793a2396f',
                width: 48,
                height: 48
              },
              {
                url: 'https://preview.redd.it/award_images/t5_2r5rp/l230c7t59ya81_FeelsBatman.png?width=64&amp;height=64&amp;auto=webp&amp;s=286eb15e97b6f576b0ae60ae280e532eea91659e',
                width: 64,
                height: 64
              },
              {
                url: 'https://preview.redd.it/award_images/t5_2r5rp/l230c7t59ya81_FeelsBatman.png?width=128&amp;height=128&amp;auto=webp&amp;s=926654474bafcfa61af7cffc2eebd3c7ccf2bb8a',
                width: 128,
                height: 128
              }
            ],
            icon_width: 520,
            static_icon_width: 520,
            start_date: null,
            is_enabled: true,
            awardings_required_to_grant_benefits: null,
            description: 'Shows the FeelsBatman Award and grants %{coin_symbol}100 Coins to the community. Exclusive to this community.',
            end_date: null,
            sticky_duration_seconds: null,
            subreddit_coin_reward: 100,
            count: 1,
            static_icon_height: 520,
            name: 'FeelsBatman',
            resized_static_icons: [
              {
                url: 'https://preview.redd.it/award_images/t5_2r5rp/l230c7t59ya81_FeelsBatman.png?width=16&amp;height=16&amp;auto=webp&amp;s=9ea2f2b8af86e19476c312307199cb0a9456db77',
                width: 16,
                height: 16
              },
              {
                url: 'https://preview.redd.it/award_images/t5_2r5rp/l230c7t59ya81_FeelsBatman.png?width=32&amp;height=32&amp;auto=webp&amp;s=00e96cf1de2633e7cf8039061a31f695d8eee34e',
                width: 32,
                height: 32
              },
              {
                url: 'https://preview.redd.it/award_images/t5_2r5rp/l230c7t59ya81_FeelsBatman.png?width=48&amp;height=48&amp;auto=webp&amp;s=063a3f70641a813a685ebd1f45f0581793a2396f',
                width: 48,
                height: 48
              },
              {
                url: 'https://preview.redd.it/award_images/t5_2r5rp/l230c7t59ya81_FeelsBatman.png?width=64&amp;height=64&amp;auto=webp&amp;s=286eb15e97b6f576b0ae60ae280e532eea91659e',
                width: 64,
                height: 64
              },
              {
                url: 'https://preview.redd.it/award_images/t5_2r5rp/l230c7t59ya81_FeelsBatman.png?width=128&amp;height=128&amp;auto=webp&amp;s=926654474bafcfa61af7cffc2eebd3c7ccf2bb8a',
                width: 128,
                height: 128
              }
            ],
            icon_format: null,
            icon_height: 520,
            penny_price: null,
            award_type: 'community',
            static_icon_url: 'https://i.redd.it/award_images/t5_2r5rp/l230c7t59ya81_FeelsBatman.png'
          },
          {
            giver_coin_reward: null,
            subreddit_id: null,
            is_new: false,
            days_of_drip_extension: null,
            coin_price: 10,
            id: 'award_104aae3c-f7ef-40ec-a6ca-0e71dd4b8c31',
            penny_donate: null,
            award_sub_type: 'GLOBAL',
            coin_reward: 0,
            icon_url: 'https://i.redd.it/award_images/t5_22cerq/tt7czbyfsmw91_GoVote.png',
            days_of_premium: null,
            tiers_by_required_awardings: null,
            resized_icons: [
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/tt7czbyfsmw91_GoVote.png?width=16&amp;height=16&amp;auto=webp&amp;s=397db3f76b6089dd8c02f667a6ddffe916e37a8f',
                width: 16,
                height: 16
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/tt7czbyfsmw91_GoVote.png?width=32&amp;height=32&amp;auto=webp&amp;s=0cc4399329493d4655055e177992d1b4aca966cd',
                width: 32,
                height: 32
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/tt7czbyfsmw91_GoVote.png?width=48&amp;height=48&amp;auto=webp&amp;s=cf5784dc8c93c891cd7c9a62bd3d994dfe0edaa5',
                width: 48,
                height: 48
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/tt7czbyfsmw91_GoVote.png?width=64&amp;height=64&amp;auto=webp&amp;s=1d3ada6feab2fa641c3517312fee972632a70e5f',
                width: 64,
                height: 64
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/tt7czbyfsmw91_GoVote.png?width=128&amp;height=128&amp;auto=webp&amp;s=b6b6947dc7068dcde58fc7dfabe1a9fafed3993b',
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
            count: 5,
            static_icon_height: 2048,
            name: 'Go Vote!',
            resized_static_icons: [
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/tt7czbyfsmw91_GoVote.png?width=16&amp;height=16&amp;auto=webp&amp;s=397db3f76b6089dd8c02f667a6ddffe916e37a8f',
                width: 16,
                height: 16
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/tt7czbyfsmw91_GoVote.png?width=32&amp;height=32&amp;auto=webp&amp;s=0cc4399329493d4655055e177992d1b4aca966cd',
                width: 32,
                height: 32
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/tt7czbyfsmw91_GoVote.png?width=48&amp;height=48&amp;auto=webp&amp;s=cf5784dc8c93c891cd7c9a62bd3d994dfe0edaa5',
                width: 48,
                height: 48
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/tt7czbyfsmw91_GoVote.png?width=64&amp;height=64&amp;auto=webp&amp;s=1d3ada6feab2fa641c3517312fee972632a70e5f',
                width: 64,
                height: 64
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/tt7czbyfsmw91_GoVote.png?width=128&amp;height=128&amp;auto=webp&amp;s=b6b6947dc7068dcde58fc7dfabe1a9fafed3993b',
                width: 128,
                height: 128
              }
            ],
            icon_format: 'PNG',
            icon_height: 2048,
            penny_price: 0,
            award_type: 'global',
            static_icon_url: 'https://i.redd.it/award_images/t5_22cerq/tt7czbyfsmw91_GoVote.png'
          },
          {
            giver_coin_reward: null,
            subreddit_id: null,
            is_new: false,
            days_of_drip_extension: 31,
            coin_price: 1800,
            id: 'gid_3',
            penny_donate: null,
            award_sub_type: 'GLOBAL',
            coin_reward: 0,
            icon_url: 'https://www.redditstatic.com/gold/awards/icon/platinum_512.png',
            days_of_premium: 31,
            tiers_by_required_awardings: null,
            resized_icons: [
              {
                url: 'https://www.redditstatic.com/gold/awards/icon/platinum_16.png',
                width: 16,
                height: 16
              },
              {
                url: 'https://www.redditstatic.com/gold/awards/icon/platinum_32.png',
                width: 32,
                height: 32
              },
              {
                url: 'https://www.redditstatic.com/gold/awards/icon/platinum_48.png',
                width: 48,
                height: 48
              },
              {
                url: 'https://www.redditstatic.com/gold/awards/icon/platinum_64.png',
                width: 64,
                height: 64
              },
              {
                url: 'https://www.redditstatic.com/gold/awards/icon/platinum_128.png',
                width: 128,
                height: 128
              }
            ],
            icon_width: 512,
            static_icon_width: 512,
            start_date: null,
            is_enabled: true,
            awardings_required_to_grant_benefits: null,
            description: 'Gives 700 Reddit Coins and a month of r/lounge access and ad-free browsing.',
            end_date: null,
            sticky_duration_seconds: null,
            subreddit_coin_reward: 0,
            count: 2,
            static_icon_height: 512,
            name: 'Platinum',
            resized_static_icons: [
              {
                url: 'https://www.redditstatic.com/gold/awards/icon/platinum_16.png',
                width: 16,
                height: 16
              },
              {
                url: 'https://www.redditstatic.com/gold/awards/icon/platinum_32.png',
                width: 32,
                height: 32
              },
              {
                url: 'https://www.redditstatic.com/gold/awards/icon/platinum_48.png',
                width: 48,
                height: 48
              },
              {
                url: 'https://www.redditstatic.com/gold/awards/icon/platinum_64.png',
                width: 64,
                height: 64
              },
              {
                url: 'https://www.redditstatic.com/gold/awards/icon/platinum_128.png',
                width: 128,
                height: 128
              }
            ],
            icon_format: null,
            icon_height: 512,
            penny_price: null,
            award_type: 'global',
            static_icon_url: 'https://www.redditstatic.com/gold/awards/icon/platinum_512.png'
          },
          {
            giver_coin_reward: null,
            subreddit_id: null,
            is_new: false,
            days_of_drip_extension: null,
            coin_price: 30,
            id: 'award_b4ff447e-05a5-42dc-9002-63568807cfe6',
            penny_donate: null,
            award_sub_type: 'PREMIUM',
            coin_reward: 0,
            icon_url: 'https://www.redditstatic.com/gold/awards/icon/Illuminati_512.png',
            days_of_premium: null,
            tiers_by_required_awardings: null,
            resized_icons: [
              {
                url: 'https://www.redditstatic.com/gold/awards/icon/Illuminati_16.png',
                width: 16,
                height: 16
              },
              {
                url: 'https://www.redditstatic.com/gold/awards/icon/Illuminati_32.png',
                width: 32,
                height: 32
              },
              {
                url: 'https://www.redditstatic.com/gold/awards/icon/Illuminati_48.png',
                width: 48,
                height: 48
              },
              {
                url: 'https://www.redditstatic.com/gold/awards/icon/Illuminati_64.png',
                width: 64,
                height: 64
              },
              {
                url: 'https://www.redditstatic.com/gold/awards/icon/Illuminati_128.png',
                width: 128,
                height: 128
              }
            ],
            icon_width: 2048,
            static_icon_width: 2048,
            start_date: null,
            is_enabled: true,
            awardings_required_to_grant_benefits: null,
            description: 'A glowing commendation for all to see',
            end_date: null,
            sticky_duration_seconds: null,
            subreddit_coin_reward: 0,
            count: 11,
            static_icon_height: 2048,
            name: 'All-Seeing Upvote',
            resized_static_icons: [
              {
                url: 'https://preview.redd.it/award_images/t5_q0gj4/am40b8b08l581_All-SeeingUpvote2.png?width=16&amp;height=16&amp;auto=webp&amp;s=978c93744e53b8c9305467a7be792e5c401eac6c',
                width: 16,
                height: 16
              },
              {
                url: 'https://preview.redd.it/award_images/t5_q0gj4/am40b8b08l581_All-SeeingUpvote2.png?width=32&amp;height=32&amp;auto=webp&amp;s=d2ee343eef5048ad3add75d4a4d4e3922bb9565a',
                width: 32,
                height: 32
              },
              {
                url: 'https://preview.redd.it/award_images/t5_q0gj4/am40b8b08l581_All-SeeingUpvote2.png?width=48&amp;height=48&amp;auto=webp&amp;s=7d216fd3a05c61d9fb75b27092844c546d958f14',
                width: 48,
                height: 48
              },
              {
                url: 'https://preview.redd.it/award_images/t5_q0gj4/am40b8b08l581_All-SeeingUpvote2.png?width=64&amp;height=64&amp;auto=webp&amp;s=b76693f84fd19b04d0c0444a9812d812105e2d8f',
                width: 64,
                height: 64
              },
              {
                url: 'https://preview.redd.it/award_images/t5_q0gj4/am40b8b08l581_All-SeeingUpvote2.png?width=128&amp;height=128&amp;auto=webp&amp;s=5353352ae9f443c353ef0b7725dabcfc1b3829a5',
                width: 128,
                height: 128
              }
            ],
            icon_format: 'APNG',
            icon_height: 2048,
            penny_price: null,
            award_type: 'global',
            static_icon_url: 'https://i.redd.it/award_images/t5_q0gj4/am40b8b08l581_All-SeeingUpvote2.png'
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
            count: 2,
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
          },
          {
            giver_coin_reward: null,
            subreddit_id: null,
            is_new: false,
            days_of_drip_extension: null,
            coin_price: 300,
            id: 'award_f7a4fd5e-7cd1-4c11-a1c9-c18d05902e81',
            penny_donate: null,
            award_sub_type: 'GLOBAL',
            coin_reward: 0,
            icon_url: 'https://www.redditstatic.com/gold/awards/icon/CrabRave_512.png',
            days_of_premium: null,
            tiers_by_required_awardings: null,
            resized_icons: [
              {
                url: 'https://www.redditstatic.com/gold/awards/icon/CrabRave_16.png',
                width: 16,
                height: 16
              },
              {
                url: 'https://www.redditstatic.com/gold/awards/icon/CrabRave_32.png',
                width: 32,
                height: 32
              },
              {
                url: 'https://www.redditstatic.com/gold/awards/icon/CrabRave_48.png',
                width: 48,
                height: 48
              },
              {
                url: 'https://www.redditstatic.com/gold/awards/icon/CrabRave_64.png',
                width: 64,
                height: 64
              },
              {
                url: 'https://www.redditstatic.com/gold/awards/icon/CrabRave_128.png',
                width: 128,
                height: 128
              }
            ],
            icon_width: 512,
            static_icon_width: 512,
            start_date: null,
            is_enabled: true,
            awardings_required_to_grant_benefits: null,
            description: '[Happy crab noises]',
            end_date: null,
            sticky_duration_seconds: null,
            subreddit_coin_reward: 0,
            count: 1,
            static_icon_height: 512,
            name: 'Crab Rave',
            resized_static_icons: [
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/g699g8hvzmc51_CrabRave.png?width=16&amp;height=16&amp;auto=webp&amp;s=911d4a8feccec39a14013ae8e09592c5175eb684',
                width: 16,
                height: 16
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/g699g8hvzmc51_CrabRave.png?width=32&amp;height=32&amp;auto=webp&amp;s=283097bb480eb969eeb78a74a4fa5ddf0426fa27',
                width: 32,
                height: 32
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/g699g8hvzmc51_CrabRave.png?width=48&amp;height=48&amp;auto=webp&amp;s=fd0ded4faff1d3e8ff3700bb5fb86d6c8e9b3b72',
                width: 48,
                height: 48
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/g699g8hvzmc51_CrabRave.png?width=64&amp;height=64&amp;auto=webp&amp;s=44615c8e4249230c0f30a2e3fb1ec6cff6477d1e',
                width: 64,
                height: 64
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/g699g8hvzmc51_CrabRave.png?width=128&amp;height=128&amp;auto=webp&amp;s=05e86a663694895598143087a39da2f12aebb8f4',
                width: 128,
                height: 128
              }
            ],
            icon_format: 'APNG',
            icon_height: 512,
            penny_price: 0,
            award_type: 'global',
            static_icon_url: 'https://i.redd.it/award_images/t5_22cerq/g699g8hvzmc51_CrabRave.png'
          },
          {
            giver_coin_reward: null,
            subreddit_id: null,
            is_new: false,
            days_of_drip_extension: null,
            coin_price: 200,
            id: 'award_4922c1be-3646-4d62-96ea-19a56798df51',
            penny_donate: null,
            award_sub_type: 'GLOBAL',
            coin_reward: 0,
            icon_url: 'https://i.redd.it/award_images/t5_22cerq/kjpl76213ug51_Looking.png',
            days_of_premium: null,
            tiers_by_required_awardings: null,
            resized_icons: [
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/kjpl76213ug51_Looking.png?width=16&amp;height=16&amp;auto=webp&amp;s=587f804cfb05274aa804f013b414b5755e1a49fd',
                width: 16,
                height: 16
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/kjpl76213ug51_Looking.png?width=32&amp;height=32&amp;auto=webp&amp;s=90cf62af7337cad44188e78fbd0e0039823be792',
                width: 32,
                height: 32
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/kjpl76213ug51_Looking.png?width=48&amp;height=48&amp;auto=webp&amp;s=fbc04a472b6c9c3bdba8c439a9c1ec5524f4a7fd',
                width: 48,
                height: 48
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/kjpl76213ug51_Looking.png?width=64&amp;height=64&amp;auto=webp&amp;s=883c15cc7b3d98dd260e14be64b0d03e3cceda31',
                width: 64,
                height: 64
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/kjpl76213ug51_Looking.png?width=128&amp;height=128&amp;auto=webp&amp;s=863809606d759dc65538b4ce7bd754abb90913e4',
                width: 128,
                height: 128
              }
            ],
            icon_width: 2048,
            static_icon_width: 2048,
            start_date: null,
            is_enabled: true,
            awardings_required_to_grant_benefits: null,
            description: 'I can\'t help but look.',
            end_date: null,
            sticky_duration_seconds: null,
            subreddit_coin_reward: 0,
            count: 1,
            static_icon_height: 2048,
            name: 'Looking',
            resized_static_icons: [
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/kjpl76213ug51_Looking.png?width=16&amp;height=16&amp;auto=webp&amp;s=587f804cfb05274aa804f013b414b5755e1a49fd',
                width: 16,
                height: 16
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/kjpl76213ug51_Looking.png?width=32&amp;height=32&amp;auto=webp&amp;s=90cf62af7337cad44188e78fbd0e0039823be792',
                width: 32,
                height: 32
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/kjpl76213ug51_Looking.png?width=48&amp;height=48&amp;auto=webp&amp;s=fbc04a472b6c9c3bdba8c439a9c1ec5524f4a7fd',
                width: 48,
                height: 48
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/kjpl76213ug51_Looking.png?width=64&amp;height=64&amp;auto=webp&amp;s=883c15cc7b3d98dd260e14be64b0d03e3cceda31',
                width: 64,
                height: 64
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/kjpl76213ug51_Looking.png?width=128&amp;height=128&amp;auto=webp&amp;s=863809606d759dc65538b4ce7bd754abb90913e4',
                width: 128,
                height: 128
              }
            ],
            icon_format: 'PNG',
            icon_height: 2048,
            penny_price: 0,
            award_type: 'global',
            static_icon_url: 'https://i.redd.it/award_images/t5_22cerq/kjpl76213ug51_Looking.png'
          },
          {
            giver_coin_reward: null,
            subreddit_id: null,
            is_new: false,
            days_of_drip_extension: null,
            coin_price: 70,
            id: 'award_b1b44fa1-8179-4d84-a9ed-f25bb81f1c5f',
            penny_donate: null,
            award_sub_type: 'GLOBAL',
            coin_reward: 0,
            icon_url: 'https://i.redd.it/award_images/t5_22cerq/ey2iodron2s41_Facepalm.png',
            days_of_premium: null,
            tiers_by_required_awardings: null,
            resized_icons: [
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/ey2iodron2s41_Facepalm.png?width=16&amp;height=16&amp;auto=webp&amp;s=d06b7de23ce8b8ea0f3e7cfd15033ac4893b72f0',
                width: 16,
                height: 16
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/ey2iodron2s41_Facepalm.png?width=32&amp;height=32&amp;auto=webp&amp;s=9c08ea897b5caa9a70e315e13df5b4a3ba33246e',
                width: 32,
                height: 32
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/ey2iodron2s41_Facepalm.png?width=48&amp;height=48&amp;auto=webp&amp;s=3971718e2c95e4869756cbdbe9e996719ed2dcc2',
                width: 48,
                height: 48
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/ey2iodron2s41_Facepalm.png?width=64&amp;height=64&amp;auto=webp&amp;s=37daf6131baa13b786daeb564ef67963874bdce0',
                width: 64,
                height: 64
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/ey2iodron2s41_Facepalm.png?width=128&amp;height=128&amp;auto=webp&amp;s=696adda035a7fd96e7688edeea93ad1b16d4ab1a',
                width: 128,
                height: 128
              }
            ],
            icon_width: 2048,
            static_icon_width: 2048,
            start_date: null,
            is_enabled: true,
            awardings_required_to_grant_benefits: null,
            description: '*Lowers face into palm*',
            end_date: null,
            sticky_duration_seconds: null,
            subreddit_coin_reward: 0,
            count: 1,
            static_icon_height: 2048,
            name: 'Facepalm',
            resized_static_icons: [
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/ey2iodron2s41_Facepalm.png?width=16&amp;height=16&amp;auto=webp&amp;s=d06b7de23ce8b8ea0f3e7cfd15033ac4893b72f0',
                width: 16,
                height: 16
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/ey2iodron2s41_Facepalm.png?width=32&amp;height=32&amp;auto=webp&amp;s=9c08ea897b5caa9a70e315e13df5b4a3ba33246e',
                width: 32,
                height: 32
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/ey2iodron2s41_Facepalm.png?width=48&amp;height=48&amp;auto=webp&amp;s=3971718e2c95e4869756cbdbe9e996719ed2dcc2',
                width: 48,
                height: 48
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/ey2iodron2s41_Facepalm.png?width=64&amp;height=64&amp;auto=webp&amp;s=37daf6131baa13b786daeb564ef67963874bdce0',
                width: 64,
                height: 64
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/ey2iodron2s41_Facepalm.png?width=128&amp;height=128&amp;auto=webp&amp;s=696adda035a7fd96e7688edeea93ad1b16d4ab1a',
                width: 128,
                height: 128
              }
            ],
            icon_format: 'PNG',
            icon_height: 2048,
            penny_price: 0,
            award_type: 'global',
            static_icon_url: 'https://i.redd.it/award_images/t5_22cerq/ey2iodron2s41_Facepalm.png'
          },
          {
            giver_coin_reward: null,
            subreddit_id: null,
            is_new: false,
            days_of_drip_extension: null,
            coin_price: 100,
            id: 'award_869d4135-8738-41e5-8630-de593b4f049f',
            penny_donate: null,
            award_sub_type: 'GLOBAL',
            coin_reward: 0,
            icon_url: 'https://i.redd.it/award_images/t5_22cerq/18mwqw5th9e51_MURICA.png',
            days_of_premium: null,
            tiers_by_required_awardings: null,
            resized_icons: [
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/18mwqw5th9e51_MURICA.png?width=16&amp;height=16&amp;auto=webp&amp;s=0c64940c225d9e05e6116c59a43523d0aa0a5be4',
                width: 16,
                height: 16
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/18mwqw5th9e51_MURICA.png?width=32&amp;height=32&amp;auto=webp&amp;s=1269bf3ab924e09c0ef5b0d935e0ce7576a11852',
                width: 32,
                height: 32
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/18mwqw5th9e51_MURICA.png?width=48&amp;height=48&amp;auto=webp&amp;s=7b7de78f9bb4ae6dfa33242cf3596647e4d00d2f',
                width: 48,
                height: 48
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/18mwqw5th9e51_MURICA.png?width=64&amp;height=64&amp;auto=webp&amp;s=fcf6512dbc011bcca1f0fc67b957880145c73749',
                width: 64,
                height: 64
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/18mwqw5th9e51_MURICA.png?width=128&amp;height=128&amp;auto=webp&amp;s=c416f50c3987d907af21347cb1f03f4395dc0376',
                width: 128,
                height: 128
              }
            ],
            icon_width: 2048,
            static_icon_width: 2048,
            start_date: null,
            is_enabled: true,
            awardings_required_to_grant_benefits: null,
            description: 'Did somebody say \'Murica?',
            end_date: null,
            sticky_duration_seconds: null,
            subreddit_coin_reward: 0,
            count: 3,
            static_icon_height: 2048,
            name: '\'MURICA',
            resized_static_icons: [
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/18mwqw5th9e51_MURICA.png?width=16&amp;height=16&amp;auto=webp&amp;s=0c64940c225d9e05e6116c59a43523d0aa0a5be4',
                width: 16,
                height: 16
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/18mwqw5th9e51_MURICA.png?width=32&amp;height=32&amp;auto=webp&amp;s=1269bf3ab924e09c0ef5b0d935e0ce7576a11852',
                width: 32,
                height: 32
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/18mwqw5th9e51_MURICA.png?width=48&amp;height=48&amp;auto=webp&amp;s=7b7de78f9bb4ae6dfa33242cf3596647e4d00d2f',
                width: 48,
                height: 48
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/18mwqw5th9e51_MURICA.png?width=64&amp;height=64&amp;auto=webp&amp;s=fcf6512dbc011bcca1f0fc67b957880145c73749',
                width: 64,
                height: 64
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/18mwqw5th9e51_MURICA.png?width=128&amp;height=128&amp;auto=webp&amp;s=c416f50c3987d907af21347cb1f03f4395dc0376',
                width: 128,
                height: 128
              }
            ],
            icon_format: 'PNG',
            icon_height: 2048,
            penny_price: 0,
            award_type: 'global',
            static_icon_url: 'https://i.redd.it/award_images/t5_22cerq/18mwqw5th9e51_MURICA.png'
          },
          {
            giver_coin_reward: null,
            subreddit_id: null,
            is_new: false,
            days_of_drip_extension: null,
            coin_price: 250,
            id: 'award_e03a0c52-56b5-45df-bd6f-5f2da10cfdc5',
            penny_donate: null,
            award_sub_type: 'GLOBAL',
            coin_reward: 0,
            icon_url: 'https://www.redditstatic.com/gold/awards/icon/2Dread_512.png',
            days_of_premium: null,
            tiers_by_required_awardings: null,
            resized_icons: [
              {
                url: 'https://www.redditstatic.com/gold/awards/icon/2Dread_16.png',
                width: 16,
                height: 16
              },
              {
                url: 'https://www.redditstatic.com/gold/awards/icon/2Dread_32.png',
                width: 32,
                height: 32
              },
              {
                url: 'https://www.redditstatic.com/gold/awards/icon/2Dread_48.png',
                width: 48,
                height: 48
              },
              {
                url: 'https://www.redditstatic.com/gold/awards/icon/2Dread_64.png',
                width: 64,
                height: 64
              },
              {
                url: 'https://www.redditstatic.com/gold/awards/icon/2Dread_128.png',
                width: 128,
                height: 128
              }
            ],
            icon_width: 512,
            static_icon_width: 512,
            start_date: null,
            is_enabled: true,
            awardings_required_to_grant_benefits: null,
            description: 'A sense of impending doom',
            end_date: null,
            sticky_duration_seconds: null,
            subreddit_coin_reward: 0,
            count: 1,
            static_icon_height: 512,
            name: 'Doom',
            resized_static_icons: [
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/6syp1hxsqts61_Doom.png?width=16&amp;height=16&amp;auto=webp&amp;s=5f202a5ac5aec91dba82d36301eaa7a5761fa325',
                width: 16,
                height: 16
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/6syp1hxsqts61_Doom.png?width=32&amp;height=32&amp;auto=webp&amp;s=3ac3cc0ced217f0ef9881a0a18494e7bed1d46bc',
                width: 32,
                height: 32
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/6syp1hxsqts61_Doom.png?width=48&amp;height=48&amp;auto=webp&amp;s=3762a197e5df6c2ed33c716a38358e81adf3a8e5',
                width: 48,
                height: 48
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/6syp1hxsqts61_Doom.png?width=64&amp;height=64&amp;auto=webp&amp;s=d89a1be27d378427250d106eedd5e88fd236bfd5',
                width: 64,
                height: 64
              },
              {
                url: 'https://preview.redd.it/award_images/t5_22cerq/6syp1hxsqts61_Doom.png?width=128&amp;height=128&amp;auto=webp&amp;s=2a4b7adaebdd8d24eb4df2a1526a670cad15799e',
                width: 128,
                height: 128
              }
            ],
            icon_format: 'APNG',
            icon_height: 512,
            penny_price: 0,
            award_type: 'global',
            static_icon_url: 'https://i.redd.it/award_images/t5_22cerq/6syp1hxsqts61_Doom.png'
          },
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
            count: 13,
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
            count: 11,
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
          }
        ],
        awarders: [],
        media_only: false,
        link_flair_template_id: '423b2514-8942-11ea-9c45-0ec57a19fbbd',
        can_gild: false,
        spoiler: false,
        locked: false,
        author_flair_text: null,
        treatment_tags: [],
        visited: false,
        removed_by: null,
        mod_note: null,
        distinguished: null,
        subreddit_id: 't5_2r5rp',
        author_is_blocked: false,
        mod_reason_by: null,
        num_reports: null,
        removal_reason: null,
        link_flair_background_color: '#ffd635',
        id: 'ynzkig',
        is_robot_indexable: true,
        report_reasons: null,
        author: 'knownothingwiseguy',
        discussion_type: null,
        num_comments: 11919,
        send_replies: true,
        whitelist_status: 'all_ads',
        contest_mode: false,
        mod_reports: [],
        author_patreon_flair: false,
        author_flair_text_color: null,
        permalink: '/r/facepalm/comments/ynzkig/policing_in_america_a_legally_blind_man_was/',
        parent_whitelist_status: 'all_ads',
        stickied: false,
        url: 'https://v.redd.it/kdt9s1q7rdy91',
        subreddit_subscribers: 6704118,
        created_utc: 1667762023,
        num_crossposts: 37,
        media: {
          reddit_video: {
            bitrate_kbps: 2400,
            fallback_url: 'https://v.redd.it/kdt9s1q7rdy91/DASH_720.mp4?source=fallback',
            height: 720,
            width: 1280,
            scrubber_media_url: 'https://v.redd.it/kdt9s1q7rdy91/DASH_96.mp4',
            dash_url: 'https://v.redd.it/kdt9s1q7rdy91/DASHPlaylist.mpd?a=1670409342%2CZGRkMjZiYzE2OWJiMDMzODJmZWY3YTZjMTc4NDFiOTExMzcyODU5NTkwNjE4YzY3NDY3ODJlZjUwMTljOTdhOA%3D%3D&amp;v=1&amp;f=sd',
            duration: 263,
            hls_url: 'https://v.redd.it/kdt9s1q7rdy91/HLSPlaylist.m3u8?a=1670409342%2CZWUwNjkwODM0M2U1MWMyYTNhY2ZmY2U4ZmVlN2YzYjY3NzI1YTVlN2ZhZDIzYmE0NTM1YTM3NjM0MWI1YWU3Zg%3D%3D&amp;v=1&amp;f=sd',
            is_gif: false,
            transcoding_status: 'completed'
          }
        },
        is_video: true
      }
    }
  }
  */