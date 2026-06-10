import 'package:careconnect/main.dart';
import 'package:careconnect/screens/accessibility_screen.dart';
import 'package:careconnect/screens/help_center_screen.dart';
import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';

void main() {
  group('MyApp Tests', () {
    testWidgets('MyApp creates MaterialApp correctly', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      expect(find.byType(MaterialApp), findsOneWidget);
      expect(find.byType(CareConnectApp), findsOneWidget);
    });

    testWidgets('MyApp theme is configured correctly', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      final materialApp = find.byType(MaterialApp).evaluate().first.widget as MaterialApp;
      expect(materialApp.title, 'CareConnect');
      expect(materialApp.theme?.primaryColor, const Color(0xFF2D8659));
    });
  });

  group('CareConnectApp Navigation Tests', () {
    testWidgets('CareConnectApp initializes with Home page', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      expect(find.byType(HomePage), findsOneWidget);
      expect(find.text('Welcome to CareConnect'), findsOneWidget);
    });

    testWidgets('Bottom navigation bar has 5 items', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      expect(find.byType(BottomNavigationBar), findsOneWidget);
      final navBar = find.byType(BottomNavigationBar).evaluate().first.widget as BottomNavigationBar;
      expect(navBar.items.length, 5);
    });

    testWidgets('Tapping Alerts tab navigates to AlertsPage', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.notifications));
      await tester.pumpAndSettle();

      expect(find.byType(AlertsPage), findsOneWidget);
      expect(find.text('Alerts'), findsWidgets);
    });

    testWidgets('Tapping Profile tab navigates to ProfilePage', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.person));
      await tester.pumpAndSettle();

      expect(find.byType(ProfilePage), findsOneWidget);
      expect(find.text('Profile'), findsWidgets);
    });
  });

  group('HomePage Tests', () {
    testWidgets('HomePage displays all sections', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      expect(find.text('Welcome to CareConnect'), findsOneWidget);
      expect(find.text('Your personalized healthcare companion'), findsOneWidget);
      expect(find.text('Quick Actions'), findsOneWidget);
      expect(find.text('Recent Activities'), findsOneWidget);
    });

    testWidgets('HomePage has Help Center quick action card', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      expect(find.text('Help Center'), findsOneWidget);
      expect(find.byIcon(Icons.help_outline), findsOneWidget);
    });

    testWidgets('HomePage has Accessibility quick action card', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      expect(find.text('Accessibility'), findsOneWidget);
      expect(find.byIcon(Icons.accessibility), findsOneWidget);
    });

    testWidgets('HomePage has Appointments quick action card', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      expect(
        find.descendant(
          of: find.byType(GridView),
          matching: find.text('Appointments'),
        ),
        findsOneWidget,
      );
    });

    testWidgets('Help Center card navigates to HelpCenterScreen', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.help_outline));
      await tester.pumpAndSettle();

      expect(find.byType(HelpCenterScreen), findsOneWidget);
    });

    testWidgets('Accessibility card navigates to AccessibilityScreen', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.accessibility));
      await tester.pumpAndSettle();

      expect(find.byType(AccessibilityScreen), findsOneWidget);
    });

    testWidgets('HomePage displays activity items', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      expect(find.text('Appointment Scheduled'), findsOneWidget);
      expect(find.text('Medication Reminder'), findsOneWidget);
      expect(find.text('New Message'), findsOneWidget);
    });

    testWidgets('HomePage AppBar has CareConnect branding', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      expect(find.text('CareConnect'), findsOneWidget);
      expect(find.byIcon(Icons.menu), findsOneWidget);
    });

    testWidgets('HomePage AppBar has notification icon with badge', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      expect(find.byIcon(Icons.notifications_outlined), findsOneWidget);
      expect(find.text('3'), findsWidgets);
    });
  });
  group('AlertsPage Tests', () {
    testWidgets('AlertsPage displays correctly', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.notifications));
      await tester.pumpAndSettle();

      expect(find.byType(AlertsPage), findsOneWidget);
      expect(find.text('Alerts'), findsWidgets);
    });

    testWidgets('AlertsPage displays alert cards', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.notifications));
      await tester.pumpAndSettle();

      expect(find.text('Medication Time'), findsOneWidget);
      expect(find.text('Appointment Reminder'), findsOneWidget);
      expect(find.text('Health Update'), findsOneWidget);
    });

    testWidgets('AlertsPage displays alert messages', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.notifications));
      await tester.pumpAndSettle();

      expect(
        find.text('Time to take your morning medication'),
        findsOneWidget,
      );
      expect(
        find.text('Your appointment with Dr. Johnson is tomorrow at 2 PM'),
        findsOneWidget,
      );
    });

    testWidgets('AlertsPage displays alert times', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.notifications));
      await tester.pumpAndSettle();

      expect(find.text('9:00 AM'), findsOneWidget);
      expect(find.text('Tomorrow'), findsWidgets);
      expect(find.text('Today'), findsOneWidget);
    });

    testWidgets('AlertsPage displays alert icons', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.notifications));
      await tester.pumpAndSettle();

      expect(find.byIcon(Icons.medication), findsOneWidget);
      expect(find.byIcon(Icons.info), findsOneWidget);
    });
  });
  group('ProfilePage Tests', () {
    testWidgets('ProfilePage displays correctly', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.person));
      await tester.pumpAndSettle();

      expect(find.byType(ProfilePage), findsOneWidget);
    });

    testWidgets('ProfilePage displays user profile information', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.person));
      await tester.pumpAndSettle();

      expect(find.text('John Doe'), findsOneWidget);
      expect(find.text('Patient ID: 123456'), findsOneWidget);
    });

    testWidgets('ProfilePage displays personal information section', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.person));
      await tester.pumpAndSettle();

      expect(find.text('Personal Information'), findsOneWidget);
      expect(find.text('Email'), findsOneWidget);
      expect(find.text('Phone'), findsOneWidget);
      expect(find.text('Date of Birth'), findsOneWidget);
    });

    testWidgets('ProfilePage displays personal details', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.person));
      await tester.pumpAndSettle();

      expect(find.text('john.doe@email.com'), findsOneWidget);
      expect(find.text('(555) 123-4567'), findsOneWidget);
      expect(find.text('January 15, 1965'), findsOneWidget);
    });

    testWidgets('ProfilePage displays settings section', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.person));
      await tester.pumpAndSettle();

      expect(find.text('Settings'), findsOneWidget);
    });

    testWidgets('ProfilePage displays settings items', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.person));
      await tester.pumpAndSettle();

      expect(find.text('Notifications'), findsOneWidget);
      expect(find.text('Accessibility'), findsOneWidget);
      expect(find.text('Privacy & Security'), findsOneWidget);
      expect(find.text('Help Center'), findsOneWidget);
    });

    testWidgets('ProfilePage displays logout button', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.person));
      await tester.pumpAndSettle();

      expect(find.text('Logout'), findsOneWidget);
      expect(find.byType(ElevatedButton), findsOneWidget);
    });

    testWidgets('ProfilePage displays user avatar', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.person));
      await tester.pumpAndSettle();

      expect(find.byType(CircleAvatar), findsOneWidget);
      expect(find.text('JD'), findsOneWidget);
    });
  });

  group('NavigationItem Tests', () {
    test('NavigationItem creates correctly', () {
      final item = NavigationItem(
        icon: Icons.home,
        label: 'Home',
        page: const HomePage(),
      );

      expect(item.icon, Icons.home);
      expect(item.label, 'Home');
      expect(item.page, isA<HomePage>());
    });

    test('NavigationItem has all required properties', () {
      final item = NavigationItem(
        icon: Icons.message,
        label: 'Messages',
        page: const MessagesPage(),
      );

      expect(item.icon, isNotNull);
      expect(item.label, isNotNull);
      expect(item.page, isNotNull);
    });
  });

  group('Theme Configuration Tests', () {
    testWidgets('App uses correct primary color', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      final materialApp = find.byType(MaterialApp).evaluate().first.widget as MaterialApp;
      expect(materialApp.theme?.primaryColor, const Color(0xFF2D8659));
    });

    testWidgets('Bottom navigation bar items are styled correctly', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      expect(find.byType(BottomNavigationBar), findsOneWidget);
      final navBar = find.byType(BottomNavigationBar).evaluate().first.widget as BottomNavigationBar;
      expect(navBar.type, BottomNavigationBarType.fixed);
    });
  });

  group('App Bar Tests', () {
    testWidgets('HomePage AppBar displays correctly', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      expect(find.byType(AppBar), findsOneWidget);
      expect(find.text('CareConnect'), findsOneWidget);
    });

    testWidgets('ProfilePage AppBar displays correctly', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      await tester.tap(find.byIcon(Icons.person));
      await tester.pumpAndSettle();

      expect(find.text('Profile'), findsWidgets);
    });
  });

  group('Scrolling Tests', () {
    testWidgets('HomePage content is scrollable', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      expect(find.byType(SingleChildScrollView), findsWidgets);
    });
  });

  group('Text Content Tests', () {
    testWidgets('HomePage displays all required text', (WidgetTester tester) async {
      await tester.pumpWidget(const MyApp());

      expect(find.text('Welcome to CareConnect'), findsOneWidget);
      expect(find.text('Quick Actions'), findsOneWidget);
      expect(find.text('Recent Activities'), findsOneWidget);
    });
  });
}
