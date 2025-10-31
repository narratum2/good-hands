# Google Analytics 4 Deployment Checklist

## ✅ Completed Steps

### 1. Google Analytics Configuration
- [x] Logged into Google Analytics account
- [x] Accessed Good Hands property (G-ZGDMVGP040)
- [x] Enabled all enhanced measurement features:
  - [x] Page views
  - [x] Scrolls
  - [x] Outbound clicks
  - [x] Site search
  - [x] Form interactions
  - [x] Video engagement
  - [x] File downloads

### 2. Code Integration
- [x] Created GoogleAnalytics.tsx component
- [x] Created analytics.ts utility library
- [x] Updated app/layout.tsx to include GA4
- [x] Added .env.local with Measurement ID
- [x] Committed changes to Git
- [x] Pushed to GitHub repository

### 3. Documentation
- [x] Created ANALYTICS_IMPLEMENTATION.md (comprehensive guide)
- [x] Created CUSTOM_DIMENSIONS_SETUP.md (GA4 configuration guide)
- [x] Created TRACKING_EXAMPLES.md (code examples)

## 🚀 Next Steps for Deployment

### Step 1: Deploy to Vercel

1. **Add Environment Variable in Vercel**
   - Go to: https://vercel.com/narratum2/good-hands
   - Navigate to: Settings → Environment Variables
   - Add new variable:
     - **Name**: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
     - **Value**: `G-ZGDMVGP040`
     - **Environments**: Production, Preview, Development
   - Click "Save"

2. **Trigger Deployment**
   - Option A: Push changes trigger auto-deploy (already done ✅)
   - Option B: Manual redeploy from Vercel dashboard
   - Go to: Deployments → Click "Redeploy"

3. **Wait for Deployment**
   - Monitor deployment status
   - Typical deployment time: 2-5 minutes
   - Check for any build errors

### Step 2: Verify Installation (After Deployment)

1. **Check Website is Live**
   - Visit: https://beautysalonlisbon.com (or your Vercel URL)
   - Ensure site loads correctly
   - Check console for errors (F12 → Console)

2. **Verify GA4 Script is Loading**
   - Open browser DevTools (F12)
   - Go to Network tab
   - Filter by "gtag"
   - You should see: `gtag/js?id=G-ZGDMVGP040`
   - Status should be: 200 OK

3. **Test with GA4 DebugView**
   - Visit your site with: `?gtag_debug=1` at the end of URL
   - Example: `https://beautysalonlisbon.com?gtag_debug=1`
   - Open browser console
   - You should see GA4 debug messages
   - Events should be logged in console

4. **Check GA4 Realtime Report**
   - Go to Google Analytics
   - Navigate to: Reports → Realtime
   - Open your website in another tab
   - Within 30 seconds, you should see:
     - Active users: 1 (or more)
     - Your page views appearing
     - Your location showing up

5. **Test Traffic Source Detection**
   - Visit site from different sources:
     - Direct: Type URL directly
     - Google: Search and click result
     - Social: Click from Instagram/Facebook
   - Check Realtime report for source attribution

### Step 3: Test Key Events

1. **Test Page View Tracking**
   - Navigate to different pages
   - Check Realtime → Events
   - Look for `page_view` events

2. **Test AI Referral Detection**
   - Simulate AI referral (if possible)
   - Or wait for organic AI traffic
   - Check for `ai_referral` event in GA4

3. **Test Form Tracking**
   - Fill out booking form
   - Check for `contact_form_start` event
   - Submit form
   - Check for `contact_form_submit` event

4. **Test Outbound Link Tracking**
   - Click social media links
   - Check for `click` events with outbound_link category

### Step 4: Set Up Custom Dimensions (In GA4)

Follow the guide in `CUSTOM_DIMENSIONS_SETUP.md`:

1. Go to Admin → Custom definitions
2. Create 7 custom dimensions:
   - [ ] AI Platform
   - [ ] Traffic Type
   - [ ] Traffic Source Detail
   - [ ] Funnel Step
   - [ ] Service Name
   - [ ] Location Name
   - [ ] Neighborhood

3. Wait 24-48 hours for data to populate

### Step 5: Create Custom Reports

1. **AI Traffic Report**
   - Go to Explore → Create new exploration
   - Add AI Platform dimension
   - Add Sessions, Conversions metrics
   - Save as "AI Referral Analysis"

2. **Funnel Report**
   - Go to Explore → Funnel exploration
   - Set up 8 funnel steps (see documentation)
   - Break down by Traffic Source
   - Save as "Booking Funnel by Source"

3. **Geographic Report**
   - Go to Reports → User → Demographics → Location
   - Analyze by Country and City
   - Compare conversion rates

### Step 6: Set Up Alerts

1. Go to Admin → Custom alerts
2. Create alerts for:
   - [ ] AI referral spike (50% increase)
   - [ ] Conversion drop (30% decrease)
   - [ ] Traffic spike (100% increase)

### Step 7: Share Access (If Needed)

1. Go to Admin → Property access management
2. Add team members with appropriate permissions:
   - Viewer: Can only view reports
   - Analyst: Can create reports
   - Editor: Can modify settings

## 🧪 Testing Checklist

### Manual Testing
- [ ] Homepage loads correctly
- [ ] GA4 script is present in page source
- [ ] Console shows no GA4 errors
- [ ] Realtime report shows activity
- [ ] Page views are tracked
- [ ] Events are firing correctly

### Traffic Source Testing
- [ ] Direct traffic is detected
- [ ] Google referral is detected
- [ ] Social media referral is detected
- [ ] UTM parameters are captured

### Funnel Testing
- [ ] Landing page view tracked
- [ ] Service view tracked
- [ ] Booking intent tracked
- [ ] Form submission tracked

### Geographic Testing
- [ ] Country is detected correctly
- [ ] City is detected (when available)
- [ ] Language is captured

## 📊 Monitoring Schedule

### First 24 Hours
- [ ] Check Realtime report every 2 hours
- [ ] Verify events are firing
- [ ] Check for any errors in console
- [ ] Monitor deployment status

### First Week
- [ ] Daily check of key metrics
- [ ] Verify custom dimensions are populating
- [ ] Check funnel completion rates
- [ ] Monitor traffic sources

### Ongoing
- [ ] Weekly review of GA4 reports
- [ ] Monthly analysis of trends
- [ ] Quarterly optimization review

## 🐛 Troubleshooting

### Issue: GA4 Not Tracking

**Symptoms**: No data in Realtime report

**Solutions**:
1. Check if Measurement ID is correct
2. Verify environment variable is set in Vercel
3. Clear browser cache and test in incognito
4. Check for ad blockers
5. Verify deployment was successful

### Issue: Events Not Firing

**Symptoms**: Page views work but custom events don't

**Solutions**:
1. Check browser console for JavaScript errors
2. Verify tracking functions are called correctly
3. Test with `?gtag_debug=1` parameter
4. Check if components are client-side ('use client')

### Issue: Traffic Source Not Detected

**Symptoms**: All traffic shows as "direct"

**Solutions**:
1. Verify referrer is being passed
2. Check UTM parameters are properly formatted
3. Review traffic source detection logic
4. Test with known referrers

### Issue: Custom Dimensions Not Showing

**Symptoms**: Dimensions created but no data

**Solutions**:
1. Wait 24-48 hours for data to populate
2. Verify event parameter names match exactly
3. Check that events are firing with parameters
4. Use DebugView to verify parameters

## 📞 Support Resources

- **GA4 Help Center**: https://support.google.com/analytics
- **Next.js Analytics Docs**: https://nextjs.org/docs/app/building-your-application/optimizing/analytics
- **Vercel Support**: https://vercel.com/support

## 🎯 Success Metrics

After 1 week, you should see:
- ✅ Daily active users tracked
- ✅ Traffic sources properly categorized
- ✅ AI referrals detected and tracked
- ✅ Geographic data populated
- ✅ Funnel steps tracked
- ✅ Conversions recorded

After 1 month, you should be able to answer:
- "What percentage of traffic comes from AI platforms?"
- "Which AI platform sends the most qualified traffic?"
- "What's the conversion rate by traffic source?"
- "Where do users drop off in the booking funnel?"
- "Which countries/cities have the highest conversion rates?"
- "Which services are most popular?"
- "What's the ROI of different marketing channels?"

## 📝 Notes

- All code has been committed to the `master` branch
- Changes are ready for deployment
- Documentation is comprehensive and ready for team use
- Custom dimensions need to be set up manually in GA4 interface
- Allow 24-48 hours for full data population

---

**Status**: ✅ Ready for Deployment
**Last Updated**: October 31, 2025
**Measurement ID**: G-ZGDMVGP040
**Repository**: narratum2/good-hands

